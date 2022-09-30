import { $global } from '@microsoft/fast-element';

/**
 *  A service to batch intersection event callbacks so multiple elements can share a single observer
 *
 * @public
 */
export class IntersectionService {
    private intersectionDetector: IntersectionObserver | null = null;

    private readonly observedElements: Map<Element, unknown[]> = new Map<Element, unknown[]>();

    public constructor() {
        this.initializeIntersectionDetector();
    }

    /**
     * Request the position of a target element
     *
     * @internal
     */
    public requestPosition = (
        target: Element,
        callback: (entries: IntersectionObserverEntry[]) => void
    ): void => {
        if (this.intersectionDetector === null) {
            return;
        }
        if (this.observedElements.has(target)) {
            this.observedElements.get(target)?.push(callback);
            return;
        }

        this.observedElements.set(target, [callback]);
        this.intersectionDetector.observe(target);
    };

    /**
     * Cancel a position request
     *
     * @internal
     */
    public cancelRequestPosition = (target: Element, callback: unknown): void => {
        const callbacks: unknown[] | undefined = this.observedElements.get(target);

        if (callbacks !== undefined) {
            const callBackIndex: number = callbacks.indexOf(callback);
            if (callBackIndex !== -1) {
                callbacks.splice(callBackIndex, 1);
            }
        }
    };

    /**
     * initialize intersection detector
     */
    private readonly initializeIntersectionDetector = (): void => {
        if (!$global.IntersectionObserver) {
            // intersection observer not supported
            return;
        }
        this.intersectionDetector = new IntersectionObserver(this.handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: [0, 1],
        });
    };

    /**
     *  Handle intersections
     */
    private readonly handleIntersection = (entries: IntersectionObserverEntry[]): void => {
        if (this.intersectionDetector === null) {
            return;
        }
        const pendingCallbacks: unknown[] = [];
        const pendingCallbackParams: IntersectionObserverEntry[][] = [];

        // go through the entries to build a list of callbacks and params for each
        entries.forEach((entry: IntersectionObserverEntry) => {
            // stop watching this element until we get new update requests for it
            this.intersectionDetector?.unobserve(entry.target);

            const thisElementCallbacks: unknown[] | undefined = this.observedElements.get(
                entry.target
            );
            if (thisElementCallbacks !== undefined) {
                thisElementCallbacks.forEach((callback: unknown) => {
                    let targetCallbackIndex: number = pendingCallbacks.indexOf(callback);
                    if (targetCallbackIndex === -1) {
                        targetCallbackIndex = pendingCallbacks.length;
                        pendingCallbacks.push(callback);
                        pendingCallbackParams.push([]);
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    (pendingCallbackParams[targetCallbackIndex]!).push(entry);
                });
                this.observedElements.delete(entry.target);
            }
        });

        // execute callbacks
        pendingCallbacks.forEach((callback: unknown, index: number) => {
            (callback as (_: unknown) => void)(pendingCallbackParams[index]);
        });
    };
}
