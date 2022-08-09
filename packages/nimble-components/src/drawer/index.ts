import { attr } from '@microsoft/fast-element';
import {
    DesignSystem,
    FoundationElement
} from '@microsoft/fast-foundation';
import { eventKeyDown, eventMouseDown, keyEscape } from '@microsoft/fast-web-utilities';
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
    public keyboardDismiss = DrawerDismissBehavior.default;

    /**
     * Specifies whether or not the drawer can be closed by clicking off of the drawer.
     * If the value is set to 'default', modal dialogs do not allow dismissal with the keyboard and non-modal
     * dialogs do allow dismissal with the keyboard.
     */
    @attr({ attribute: 'click-dismiss' })
    public clickDismiss = DrawerDismissBehavior.default;

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
    private readonly documentClickHandlerFunction = (event: Event): void => this.documentClickHandler(event);

    private openDialog(): void {
        if (this.modal) {
            this.dialog.showModal();
        } else {
            this.dialog.show();
        }
        document.addEventListener(eventKeyDown, this.documentKeyDownHandlerFunction);
        document.addEventListener(eventMouseDown, this.documentClickHandlerFunction);
    }

    private closeDialog(): void {
        this.dialog.close();
        document.removeEventListener(eventKeyDown, this.documentKeyDownHandlerFunction);
        document.removeEventListener(eventMouseDown, this.documentClickHandlerFunction);
    }

    private canDismissWithKeyboard(): boolean {
        return this.keyboardDismiss === DrawerDismissBehavior.allow
            || (this.keyboardDismiss === DrawerDismissBehavior.default && this.modal);
    }

    private canDismissWithClick(): boolean {
        return this.clickDismiss === DrawerDismissBehavior.allow
            || (this.clickDismiss === DrawerDismissBehavior.default && !this.modal);
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

    private readonly documentClickHandler = (event: Event): void => {
        const clickTarget = event.target as HTMLElement;
        if (!this.dialog.contains(clickTarget) && this.canDismissWithClick()) {
            this.open = false;
        }
    };
}

const nimbleDrawer = Drawer.compose({
    baseName: 'drawer',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleDrawer());
