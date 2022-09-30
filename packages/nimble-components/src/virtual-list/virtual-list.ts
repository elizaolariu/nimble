/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable @typescript-eslint/member-ordering */
import {
    attr,
    DOM,
    html,
    Notifier,
    nullableNumberConverter,
    Observable,
    observable,
    RepeatBehavior,
    RepeatDirective,
    Splice,
    ViewTemplate,
} from '@microsoft/fast-element';
import { FoundationElement } from '@microsoft/fast-foundation';
import { eventResize, eventScroll, Orientation } from '@microsoft/fast-web-utilities';
import { IntersectionService } from '../utilities/intersection-service';
import type { ResizeObserverClassDefinition } from '../utilities/resize-observer';

/**
 * Defines when the component updates its position automatically.
 *
 * @beta
 */
export type VirtualListAutoUpdateMode = 'manual' | 'viewport-resize' | 'auto';

/**
 * Used to describe the position of an element within the list
 */
export interface SpanMap {
    start: number;
    end: number;
    span: number;
}

/**
 * The default item template
 * Authors will typically want to provide a template specific to their needs
 * as the default display isn't particularly useful
 */
const defaultItemTemplate: ViewTemplate<unknown, VirtualList> = html`
    <div
        style='
            overflow-wrap: anywhere;
            overflow: hidden;
            position: absolute;
            height:  ${(_, c) => (c.parent.orientation === Orientation.vertical ? `${c.parent.visibleItemSpans[c.index]?.span ?? 0}px` : '100%')};
            width:  ${(_x, c) => (c.parent.orientation === Orientation.vertical ? '100%' : `${c.parent.visibleItemSpans[c.index]?.span ?? 0}px`)};
            transform: ${(_x, c) => (c.parent.orientation === Orientation.horizontal
        ? `translateX(${c.parent.visibleItemSpans[c.index]?.start ?? 0}px)`
        : `translateY(${c.parent.visibleItemSpans[c.index]?.start ?? 0}px)`)};
        '
    >
        ${x => JSON.stringify(x)}
    </div>
`;

/**
 *  The VirtualList class
 *
 * @public
 */
export class VirtualList extends FoundationElement {
    /**
     *  Whether or not the display should virtualize
     *
     * @beta
     */
    @attr({ attribute: 'virtualize', mode: 'boolean' })
    public virtualize = true;

    private virtualizeChanged(): void {
        if (this.$fastController.isConnected) {
            this.reset();
        }
    }

    /**
     * The HTML ID of the viewport element
     *
     * @beta
     * @remarks
     * HTML Attribute: anchor
     */
    @attr({ attribute: 'viewport' })
    public viewport = '';

    private viewportChanged(): void {
        if (this.$fastController.isConnected) {
            this.viewportElement = this.getViewport();
            this.updateDimensions();
        }
    }

    /**
     * The span in pixels of each item along the virtualization axis
     *
     * @beta
     * @remarks
     * HTML Attribute: item-span
     */
    @attr({ attribute: 'item-span', converter: nullableNumberConverter })
    public itemSpan = 50;

    private itemSpanChanged(): void {
        if (this.$fastController.isConnected) {
            this.updateDimensions();
        }
    }

    /**
     * Defines an area in pixels on either end of the viewport where items outside the viewport
     * will still be rendered.
     *
     * @beta
     * @remarks
     * HTML Attribute: viewport-buffer
     */
    @attr({ attribute: 'viewport-buffer', converter: nullableNumberConverter })
    public viewportBuffer = 100;

    /**
     * Whether the list is oriented vertically or horizontally.
     * Default is vertical
     *
     * @beta
     * @remarks
     * HTML Attribute: orientation
     */
    @attr
    public orientation: Orientation = Orientation.vertical;

    private orientationChanged(): void {
        if (this.$fastController.isConnected) {
            this.updateDimensions();
        }
    }

    /**
     * Auto update mode defines what prompts the component to check the dimensions of elements
     * in the DOM and reset the visible items accordingly.  Calling update() always provokes an update.
     *
     * @beta
     * @remarks
     * HTML Attribute: auto-update-mode
     */
    @attr({ attribute: 'auto-update-mode' })
    public autoUpdateMode: VirtualListAutoUpdateMode = 'manual';

    private autoUpdateModeChanged(
        prevMode: VirtualListAutoUpdateMode,
        newMode: VirtualListAutoUpdateMode
    ): void {
        if (this.$fastController.isConnected) {
            this.resetAutoUpdateMode(prevMode, newMode);
        }
    }

    /**
     *  The array of items to be displayed
     *
     * @public
     */
    @observable
    public items = [];

    private itemsChanged(): void {
        if (this.$fastController.isConnected) {
            this.reset();
        }
    }

    /**
     *  The spanmap for the displayed items
     *
     * @public
     */
    @observable
    public spanmap?: SpanMap[];

    private spanmapChanged(): void {
        if (this.$fastController.isConnected) {
            this.updateDimensions();
        }
    }

    /**
     * The HTML element being used as the viewport
     *
     * @beta
     */
    @observable
    public viewportElement?: HTMLElement;

    private viewportElementChanged(): void {
        if ((this as FoundationElement).$fastController.isConnected) {
            this.resetAutoUpdateMode(this.autoUpdateMode, this.autoUpdateMode);
        }
    }

    /**
     * The ViewTemplate used to render items.
     *
     * @public
     */
    @observable
    public itemTemplate: ViewTemplate = defaultItemTemplate;

    /**
     * The items that are currently visible (includes buffer regions)
     *
     * @internal
     */
    @observable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public visibleItems: any[] = [];

    /**
     * The positions of the currently rendered items in the list
     *
     * @internal
     */
    @observable
    public visibleItemSpans: SpanMap[] = [];

    /**
     * The calculated span of the total stack.
     * (ie. all items + start/end regions)
     *
     * @internal
     */
    @observable
    public totalListSpan = 0;

    /**
     * The size in pixels of the start 'spacer'
     * (ie. the grid region that holds space for non-rendered elements at the start of the stack)
     *
     * @internal
     */
    @observable
    public startSpacerSpan = 0;

    /**
     * The size in pixels of the end 'spacer'
     * (ie. the grid region that holds space for non-rendered elements at the end of the stack)
     *
     * @internal
     */
    @observable
    public endSpacerSpan = 0;

    /**
     * The index of the first item in the array to be rendered
     *
     * @internal
     */
    @observable
    public firstRenderedIndex = -1;

    /**
     * The index of the last item in the array to be rendered
     *
     * @internal
     */
    @observable
    public lastRenderedIndex = -1;

    /**
     * reference to the container element
     *
     * @internal
     */
    public containerElement?: HTMLDivElement;

    private static intersectionService: IntersectionService = new IntersectionService();
    private resizeDetector: ResizeObserverClassDefinition | null = null;

    private pendingPositioningUpdate = false;
    private pendingReset = false;

    private visibleRangeStart = 0;
    private visibleRangeEnd = 0;

    private viewportRect: ClientRect | DOMRect | undefined;
    private containerRect: ClientRect | DOMRect | undefined;

    private itemsRepeatBehavior: RepeatBehavior | null = null;
    private itemsPlaceholder?: Node;

    private itemsObserver: Notifier | null = null;
    private itemCount = 0;

    private finalUpdate = false;

    /**
     * @internal
     */
    public override connectedCallback(): void {
        super.connectedCallback();
        if (this.viewportElement === undefined) {
            this.viewportElement = this.getViewport();
        }
        this.resetAutoUpdateMode('manual', this.autoUpdateMode);

        if (this.itemsPlaceholder === undefined) {
            this.itemsPlaceholder = document.createComment('');
            this.appendChild(this.itemsPlaceholder);
        }

        this.initializeRepeatBehavior();
        this.initializeResizeDetector();
        this.doReset();
    }

    /**
     * @internal
     */
    public override disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this.autoUpdateMode === 'auto') {
            this.stopViewportResizeDetector();
        }
        this.cancelPendingPositionUpdates();
        this.unobserveItems();
        this.visibleItems = this.visibleItems.splice(0, this.visibleItems.length);
        this.visibleItemSpans = this.visibleItemSpans.splice(
            0,
            this.visibleItemSpans.length
        );
        this.disconnectResizeDetector();
    }

    /**
     * starts observing the items array
     */
    private observeItems(): void {
        if (!this.items) {
            return;
        }

        if (this.itemsObserver !== null) {
            this.unobserveItems();
        }

        // TODO:  we don't use splices calculated by array change events
        // look for cheaper observer implementation later

        // eslint-disable-next-line no-multi-assign
        const newObserver = (this.itemsObserver = Observable.getNotifier(this.items));
        newObserver.subscribe(this);
    }

    /**
     * stops observing the items array
     */
    private unobserveItems(): void {
        if (this.itemsObserver !== null) {
            this.itemsObserver.unsubscribe(this);
            this.itemsObserver = null;
        }
    }

    /**
     * The items list has mutated
     *
     * @internal
     */
    public handleChange(_: unknown, __: Splice[]): void {
        const firstRenderedIndex = this.firstRenderedIndex >= this.items.length
            ? this.items.length - 1
            : this.firstRenderedIndex;
        const lastRenderedIndex = this.lastRenderedIndex >= this.items.length
            ? this.items.length - 1
            : this.lastRenderedIndex;

        const newVisibleItems: unknown[] = this.items.slice(
            firstRenderedIndex,
            lastRenderedIndex + 1
        );

        this.visibleItems.splice(0, this.visibleItems.length, ...newVisibleItems);

        this.updateDimensions();
        this.requestPositionUpdates();
    }

    /**
     * Request a layout update
     *
     * @public
     */
    public update(): void {
        this.requestPositionUpdates();
    }

    /**
     * the position in the stack (in pixels) of the a particular item index in the
     * base source data.  Note that this does not necessarily mean the item is currently
     * being rendered.
     *
     * @public
     */
    public getItemSpanMap = (itemIndex: number): SpanMap | null => {
        if (itemIndex < 0 || itemIndex >= this.items.length) {
            // out of range
            return null;
        }

        if (this.spanmap !== undefined) {
            return this.spanmap[itemIndex]!;
        }

        return {
            start: itemIndex * this.itemSpan,
            end: itemIndex * this.itemSpan + this.itemSpan,
            span: this.itemSpan,
        };
    };

    /**
     * get position updates
     */
    public requestPositionUpdates = (): void => {
        if (!this.virtualize) {
            this.updateVisibleItems();
            return;
        }
        if (this.pendingPositioningUpdate) {
            this.finalUpdate = true;
            return;
        }
        this.finalUpdate = false;
        this.pendingPositioningUpdate = true;

        VirtualList.intersectionService.requestPosition(
            this.containerElement!,
            this.handleIntersection
        );
        VirtualList.intersectionService.requestPosition(
            this.viewportElement!,
            this.handleIntersection
        );
    };

    /**
     * request reset
     */
    protected reset(): void {
        if (this.pendingReset) {
            return;
        }

        this.pendingReset = true;

        DOM.queueUpdate(() => {
            this.doReset();
        });
    }

    /**
     * execute reset
     */
    private doReset(): void {
        this.pendingReset = false;
        this.cancelPendingPositionUpdates();
        this.observeItems();
        this.updateDimensions();
    }

    /**
     * initialize repeat behavior for visible items
     */
    private initializeRepeatBehavior(): void {
        if (this.itemsRepeatBehavior !== null) {
            return;
        }
        this.itemsRepeatBehavior = new RepeatDirective<VirtualList>(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
            x => x.visibleItems,
            x => x.itemTemplate,
            { positioning: true, recycle: false }
        ).createBehavior(this.itemsPlaceholder!);
        this.$fastController.addBehaviors([this.itemsRepeatBehavior]);
    }

    /**
     * cancel any pending position update requests
     */
    private cancelPendingPositionUpdates(): void {
        if (this.pendingPositioningUpdate) {
            this.pendingPositioningUpdate = false;
            VirtualList.intersectionService.cancelRequestPosition(
                this.containerElement!,
                this.handleIntersection
            );
            if (this.viewportElement !== null) {
                VirtualList.intersectionService.cancelRequestPosition(
                    this.viewportElement!,
                    this.handleIntersection
                );
            }
        }
    }

    /**
     * Handles changes to auto-update-mode
     */
    private resetAutoUpdateMode(
        prevMode: VirtualListAutoUpdateMode,
        newMode: VirtualListAutoUpdateMode
    ): void {
        switch (prevMode) {
            case 'auto':
                this.stopViewportResizeDetector();
                this.stopWindowEventListeners();
                break;

            case 'viewport-resize':
                this.stopViewportResizeDetector();
                break;
            default:
                break;
        }

        switch (newMode) {
            case 'auto':
                this.startViewportResizeDetector();
                this.startWindowUpdateEventListeners();
                break;

            case 'viewport-resize':
                this.startViewportResizeDetector();
                break;
            default:
                break;
        }
    }

    /**
     * initializes the instance's resize observer
     */
    private initializeResizeDetector(): void {
        if (this.resizeDetector !== null) {
            return;
        }
        this.resizeDetector = new ((window as unknown) as WindowWithResizeObserver).ResizeObserver(
            this.requestPositionUpdates.bind(this)
        );
        this.resizeDetector.observe(this);
    }

    /**
     * destroys the instance's resize observer
     */
    private disconnectResizeDetector(): void {
        if (this.resizeDetector !== null) {
            this.resizeDetector.unobserve(this);
            this.resizeDetector.disconnect();
            this.resizeDetector = null;
        }
    }

    /**
     * starts the viewport resize detector
     */
    private startViewportResizeDetector = (): void => {
        if (this.resizeDetector !== null && this.viewportElement !== null) {
            this.resizeDetector.observe(this.viewportElement!);
        }
    };

    /**
     * stops the viewport resize detector
     */
    private stopViewportResizeDetector = (): void => {
        if (this.resizeDetector !== null && this.viewportElement !== null) {
            this.resizeDetector.unobserve(this.viewportElement!);
        }
    };

    /**
     * starts window level event listeners that can trigger auto updating
     * (scroll and resize)
     */
    private startWindowUpdateEventListeners = (): void => {
        window.addEventListener(eventResize, this.handleResizeEvent, {
            passive: true,
        });
        window.addEventListener(eventScroll, this.handleScrollEvent, {
            passive: true,
            capture: true,
        });
    };

    /**
     * handle scroll events
     */
    private handleScrollEvent = (_: Event): void => {
        this.requestPositionUpdates();
    };

    /**
     * handle resize events
     */
    private handleResizeEvent = (_: Event): void => {
        this.requestPositionUpdates();
    };

    /**
     * stops event listeners that can trigger auto updating
     */
    private stopWindowEventListeners = (): void => {
        window.removeEventListener(eventResize, this.requestPositionUpdates);
        window.removeEventListener(eventScroll, this.requestPositionUpdates);
    };

    /**
     * Gets the viewport element by id, or defaults to element
     */
    private getViewport(): HTMLElement {
        let viewport: HTMLElement | null = null;
        const rootNode = this.getRootNode();

        if (rootNode instanceof ShadowRoot) {
            viewport = rootNode.getElementById(this.viewport);
        } else {
            viewport = document.getElementById(this.viewport);
        }

        return viewport ?? this;
    }

    /**
     * updates the dimensions of the stack
     */
    private updateDimensions = (): void => {
        if (this.items === undefined) {
            this.totalListSpan = 0;
            return;
        }
        if (this.spanmap !== undefined) {
            this.totalListSpan = (this.spanmap.length > 0) ? this.spanmap[this.spanmap.length - 1]!.end : 0;
        } else {
            this.totalListSpan = this.itemSpan * this.items.length;
        }

        this.requestPositionUpdates();
    };

    /**
     *  Updates the visible items
     */
    private updateVisibleItems = (): void => {
        if (this.items === undefined) {
            return;
        }

        if (!this.virtualize) {
            this.visibleItems.splice(0, this.visibleItems.length, ...this.items);
            this.updateVisibleItemSpans(0, this.visibleItems.length - 1);
            return;
        }

        if (this.containerRect === undefined || this.viewportRect === undefined) {
            return;
        }

        let viewportStart = this.viewportRect.top;
        let viewportEnd = this.viewportRect.bottom;
        let containerStart = this.containerRect.top;
        let containerEnd = this.containerRect.bottom;
        let containerSpan = this.containerRect.height;

        if (this.orientation === Orientation.horizontal) {
            viewportStart = this.viewportRect.left;
            viewportEnd = this.viewportRect.right;
            containerStart = this.containerRect.left;
            containerEnd = this.containerRect.right;
            containerSpan = this.containerRect.width;
        }

        if (viewportStart >= containerEnd) {
            this.visibleRangeStart = containerSpan;
            this.visibleRangeEnd = containerSpan;
        } else if (viewportEnd <= containerStart) {
            this.visibleRangeStart = 0;
            this.visibleRangeEnd = 0;
        } else {
            this.visibleRangeStart = viewportStart - containerStart - this.viewportBuffer;
            this.visibleRangeEnd = containerSpan - (containerEnd - (viewportEnd + this.viewportBuffer));

            this.visibleRangeStart = this.visibleRangeStart < 0 ? 0 : this.visibleRangeStart;
            this.visibleRangeEnd = this.visibleRangeEnd > containerSpan
                ? containerSpan
                : this.visibleRangeEnd;
        }

        const visibleRangeLength = this.visibleRangeEnd - this.visibleRangeStart;
        let newFirstRenderedIndex = 0;
        let newLastRenderedIndex = 0;

        if (this.spanmap === undefined) {
            newFirstRenderedIndex = Math.floor(this.visibleRangeStart / this.itemSpan);
            newLastRenderedIndex = newFirstRenderedIndex + Math.ceil(visibleRangeLength / this.itemSpan);
        } else {
            // todo: optimize, sloppy first try
            const firstVisibleItem: SpanMap | undefined = this.spanmap.find(
                x => x.end >= this.visibleRangeStart
            );
            if (firstVisibleItem !== undefined) {
                newFirstRenderedIndex = this.spanmap.indexOf(firstVisibleItem);
                const lastVisibleItem: SpanMap | undefined = this.spanmap.find(
                    x => x.start >= this.visibleRangeEnd
                );
                newLastRenderedIndex = lastVisibleItem === undefined
                    ? this.spanmap.length - 1
                    : this.spanmap.indexOf(lastVisibleItem);
            }
        }

        if (newFirstRenderedIndex < 0) {
            newFirstRenderedIndex = 0;
        }

        if (newLastRenderedIndex >= this.items.length) {
            newLastRenderedIndex = this.items.length - 1;
        }

        this.startSpacerSpan = newFirstRenderedIndex * this.itemSpan;
        this.endSpacerSpan = (this.items.length - newLastRenderedIndex - 1) * this.itemSpan;

        const newVisibleItems: unknown[] = this.items.slice(
            newFirstRenderedIndex,
            newLastRenderedIndex + 1
        );

        this.updateVisibleItemSpans(newFirstRenderedIndex, newLastRenderedIndex);
        this.visibleItems.splice(0, this.visibleItems.length, ...newVisibleItems);
    };

    /**
     *  Updates the span map
     */
    private updateVisibleItemSpans(
        newFirstRenderedIndex: number,
        newLastRenderedIndex: number
    ): void {
        const newVisibleItemSpans: SpanMap[] = [];

        let top = this.startSpacerSpan;

        if (this.spanmap === undefined) {
            for (let i = newFirstRenderedIndex; i <= newLastRenderedIndex; i++) {
                const thisSpanMap: SpanMap = {
                    start: top,
                    end: top + this.itemSpan,
                    span: this.itemSpan,
                };
                top = thisSpanMap.end;
                newVisibleItemSpans.push(thisSpanMap);
            }

            this.visibleItemSpans.splice(
                0,
                this.visibleItemSpans.length,
                ...newVisibleItemSpans
            );
        } else {
            this.visibleItemSpans.splice(
                0,
                this.visibleItemSpans.length,
                ...this.spanmap.slice(newFirstRenderedIndex, newLastRenderedIndex + 1)
            );
        }

        this.updateRenderedRange(newFirstRenderedIndex, newLastRenderedIndex);
    }

    /**
     *  Updates the range of rendered items
     */
    private updateRenderedRange(
        newFirstRenderedIndex: number,
        newLastRenderedIndex: number
    ): void {
        if (
            newFirstRenderedIndex === this.firstRenderedIndex && newLastRenderedIndex === this.lastRenderedIndex
        ) {
            return;
        }

        this.firstRenderedIndex = newFirstRenderedIndex;
        this.lastRenderedIndex = newLastRenderedIndex;

        this.$emit('rendered-range-change', this, { bubbles: false });
    }

    /**
     *  Handle intersections
     */
    private handleIntersection = (entries: IntersectionObserverEntry[]): void => {
        if (!this.pendingPositioningUpdate) {
            return;
        }

        this.pendingPositioningUpdate = false;

        if (this.finalUpdate) {
            this.requestPositionUpdates();
        }

        const containerEntry: IntersectionObserverEntry | undefined = entries.find(
            x => x.target === this.containerElement
        );
        const viewportEntry: IntersectionObserverEntry | undefined = entries.find(
            x => x.target === this.viewportElement
        );

        if (containerEntry === undefined || viewportEntry === undefined) {
            return;
        }

        this.containerRect = containerEntry.boundingClientRect;
        if (this.viewportElement === document.documentElement) {
            this.viewportRect = new DOMRectReadOnly(
                viewportEntry.boundingClientRect.x + document.documentElement.scrollLeft,
                viewportEntry.boundingClientRect.y + document.documentElement.scrollTop,
                viewportEntry.boundingClientRect.width,
                viewportEntry.boundingClientRect.height
            );
        } else {
            this.viewportRect = viewportEntry.boundingClientRect;
        }

        this.updateVisibleItems();
    };
}
