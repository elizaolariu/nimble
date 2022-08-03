import { attr } from '@microsoft/fast-element';
import {
    DesignSystem,
    FoundationElement
} from '@microsoft/fast-foundation';
import { styles } from './styles';
import { template } from './template';
import { DrawerLocation } from './types';

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

    // @attr
    // public state: DrawerState = DrawerState.closed;

    @attr({ mode: 'boolean' })
    public open = false;

    /**
    * Specifies that the drawer is modal and the page beneath the drawer in not interactable.
    */
    @attr({ mode: 'boolean' })
    public modal = false;

    /**
     * Specifies whether or not the drawer can be closed using ESC or clicking off. If set to 'true', the drawer can
     * only be close programmatically.
     * HTML Attribute: prevent-dismiss
     */
    @attr({ attribute: 'prevent-dismiss', mode: 'boolean' })
    public preventDismiss = false;

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

    public openChanged(_prev: boolean | undefined, _next: boolean | undefined): void {
        if (!this.$fastController.isConnected) {
            // Don't call setPositioning() until we're connected,
            // since this.forcedPosition isn't initialized yet.
            return;
        }

        if (!this.open) {
            this.dialog.close();
            return;
        }

        if (this.modal) {
            this.dialog.showModal();
        } else {
            this.dialog.show();
        }
    }

    /**
     * Handler for overlay clicks (user-initiated dismiss requests) only.
     * @internal
     */
    // public dismiss(): void {
    //     // Note: intentionally not calling super() in this function in order to implement custom preventDismiss behavior
    //     const shouldDismiss = this.$emit(
    //         'cancel',
    //         {},
    //         // Aligned with the configuration of HTMLDialogElement cancel event:
    //         // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event
    //         { bubbles: false, cancelable: true, composed: false }
    //     );
    //     if (shouldDismiss && !this.preventDismiss) {
    //         this.$emit('dismiss');
    //         this.hide();
    //     }
    // }

    // private onPropertyChange(propertyName: string): void {
    //     switch (propertyName) {
    //         case 'hidden':
    //             this.onHiddenChanged();
    //             break;
    //         case 'location':
    //             this.onLocationChanged();
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // private onHiddenChanged(): void {
    //     if (this.hidden && this.state !== DrawerState.closed) {
    //         this.state = DrawerState.closed;
    //     } else if (!this.hidden && this.state === DrawerState.closed) {
    //         this.state = DrawerState.opened;
    //     }
    // }
}

const nimbleDrawer = Drawer.compose({
    baseName: 'drawer',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleDrawer());
