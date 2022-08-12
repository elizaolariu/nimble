import { attr } from '@microsoft/fast-element';
import {
    DesignSystem,
    FoundationElement
} from '@microsoft/fast-foundation';
import { eventKeyDown, eventMouseDown, eventTransitionEnd, keyEscape } from '@microsoft/fast-web-utilities';
import { styles } from './styles';
import { template } from './template';
import { DrawerDismissBehavior, DrawerLocation } from './types';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-drawer': Drawer;
    }
}

/**
 * Drawer/Sidenav control. Shows content in a panel on the left / right side of the screen,
 * which animates to be visible with a slide-in / slide-out animation.
 * Configured via 'location', 'state', 'modal', 'preventDismiss' properties.
 */
export class Drawer extends FoundationElement {
    @attr
    public location: DrawerLocation = DrawerLocation.left;

    @attr({ mode: 'boolean' })
    public open = false;

    /**
    * Specifies that the drawer is modal and the page beneath the drawer in not interactable.
    */
    @attr({ mode: 'boolean' })
    public modal = false;

    /**
     * Specifies whether or not the drawer can be closed with the keyboard, such as ESC.
     * If the value is set to 'default', modal dialogs allow dismissal with the keyboard and non-modal
     * dialogs do not allow dismissal with the keyboard.
     */
    @attr({ attribute: 'keyboard-dismiss' })
    public keyboardDismiss: DrawerDismissBehavior = DrawerDismissBehavior.default;

    /**
     * Specifies whether or not the drawer can be closed by clicking off of the drawer.
     * If the value is set to 'default', modal dialogs do not allow dismissal with the keyboard and non-modal
     * dialogs do allow dismissal with the keyboard.
     */
    @attr({ attribute: 'click-dismiss' })
    public clickDismiss: DrawerDismissBehavior = DrawerDismissBehavior.default;

    @attr({ attribute: 'disable-animations', mode: 'boolean' })
    public disableAnimations = false;

    /**
     * The id of the element describing the dialog.
     * @public
     * @remarks
     * HTML Attribute: aria-describedby
     */
    @attr({ attribute: 'aria-describedby' })
    public ariaDescribedby = '';

    /**
     * The id of the element labeling the dialog.
     * @public
     * @remarks
     * HTML Attribute: aria-labelledby
     */
    @attr({ attribute: 'aria-labelledby' })
    public ariaLabelledby = '';

    public dialog!: HTMLDialogElement;

    public override connectedCallback(): void {
        super.connectedCallback();
        if (this.open) {
            this.openDialog();
        }
    }

    public override disconnectedCallback(): void {
        this.closeDialog();
    }

    public modalChanged(_prev: boolean | undefined, _next: boolean | undefined): void {
        if (this.open) {
            throw new Error('The \'modal\' property cannot be changed while the drawer is open.');
        }
    }

    public openChanged(_prev: boolean | undefined, _next: boolean | undefined): void {
        if (!this.$fastController.isConnected) {
            return;
        }

        if (this.open) {
            this.openDialog();
        } else {
            this.closeDialog();
        }
    }

    /**
     * Handler for dialog closing.
     * @internal
     */
    public closeHandler(_event: Event): void {
        this.open = false;
    }

    private readonly documentKeyDownHandlerFunction = (event: Event): void => this.documentKeyDownHandler(event as KeyboardEvent);
    private readonly documentClickHandlerFunction = (event: Event): void => this.documentClickHandler(event as MouseEvent);
    private readonly transitionEndHandlerFunction = (): void => this.transitionEndHandler();

    private openDialog(): void {
        if (this.modal) {
            this.dialog.showModal();
        } else {
            this.dialog.show();
        }
        this.triggerAnimation(true);
        document.addEventListener(eventKeyDown, this.documentKeyDownHandlerFunction);
        document.addEventListener(eventMouseDown, this.documentClickHandlerFunction);
    }

    private closeDialog(): void {
        this.triggerAnimation(false);
        document.removeEventListener(eventKeyDown, this.documentKeyDownHandlerFunction);
        document.removeEventListener(eventMouseDown, this.documentClickHandlerFunction);
    }

    private triggerAnimation(opening: boolean): void {
        // TODO: close animation doesn't work with pressing escape with modal = true
        this.dialog.classList.remove('animation-complete');
        if (opening) {
            this.dialog.classList.add('open');
        } else {
            this.dialog.classList.remove('open');
        }

        this.dialog.addEventListener(eventTransitionEnd, this.transitionEndHandlerFunction);
    }

    private canDismissWithKeyboard(): boolean {
        return this.keyboardDismiss === DrawerDismissBehavior.allow
            || (this.keyboardDismiss === DrawerDismissBehavior.default && this.modal);
    }

    private canDismissWithClick(): boolean {
        return this.clickDismiss === DrawerDismissBehavior.allow
            || (this.clickDismiss === DrawerDismissBehavior.default && !this.modal);
    }

    private transitionEndHandler(): void {
        this.dialog.classList.add('animation-complete');
        this.dialog.removeEventListener(eventTransitionEnd, this.transitionEndHandlerFunction);
        if (!this.open) {
            this.dialog.close();
        }
    }

    private readonly documentKeyDownHandler = (event: KeyboardEvent): void => {
        if (event.key === keyEscape) {
            const shouldDismiss = this.canDismissWithKeyboard();
            if (this.modal && !shouldDismiss) {
                event.preventDefault();
            } else if (!this.modal && shouldDismiss) {
                this.open = false;
            }
        }
    };

    private readonly documentClickHandler = (event: MouseEvent): void => {
        if (this.canDismissWithClick() && !this.isPointWithinDrawer(event.x, event.y)) {
            this.open = false;
        }
    };

    private isPointWithinDrawer(x: number, y: number): boolean {
        const boundingRectangle = this.getBoundingClientRect();
        return x >= boundingRectangle.x
            && x <= boundingRectangle.x + boundingRectangle.width
            && y >= boundingRectangle.y
            && y <= boundingRectangle.y + boundingRectangle.height;
    }
}

const nimbleDrawer = Drawer.compose({
    baseName: 'drawer',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleDrawer());
