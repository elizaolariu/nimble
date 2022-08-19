/* eslint-disable @typescript-eslint/member-ordering */
import { attr } from '@microsoft/fast-element';
import {
    DesignSystem,
    FoundationElement
} from '@microsoft/fast-foundation';
import { eventKeyDown, eventMouseDown, eventTransitionEnd, keyEscape } from '@microsoft/fast-web-utilities';
import { styles } from './styles';
import { template } from './template';
import { DrawerLocation } from './types';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-drawer': Drawer;
    }
}

/**
 * Symbol that is returned as the dialog close reason (from the Promise returned by show()) when
 * the dialog was closed by pressing the ESC key (vs. calling the close() function).
 */
export const USER_DISMISSED: unique symbol = Symbol('user dismissed');
export type UserDismissed = typeof USER_DISMISSED;

/**
 * TODOs:
 * - turn off animations when disableAnimations = true or prefers reduced motion is set
 * - figure out why exposing USER_DISMISSED isn't working correctly in Angular (duplicate export?)
 * - expose parts of element so things can be individually styled, such as the dialog's border & drop shadow
 */

/**
 * Drawer/Sidenav control. Shows content in a panel on the left / right side of the screen,
 * which animates to be visible with a slide-in / slide-out animation.
 * Configured via 'location', 'state', 'modal', 'preventDismiss' properties.
 */
export class Drawer<CloseReason = void> extends FoundationElement {
    @attr
    public location: DrawerLocation = DrawerLocation.left;

    /**
     * True if the dialog is open/showing, false otherwise
     */
    public get open(): boolean {
        return this.resolveShow !== undefined;
    }

    private resolveShow?: (reason: CloseReason | UserDismissed) => void;
    private closeReason!: CloseReason | UserDismissed;

    /**
     * Opens the drawer
     * @returns Promise that is resolved when the drawer is closed. The value of the resolved Promise is the reason value passed to the close() method, or
     * USER_DISMISSED if the dialog was closed via the ESC key or clicking off the drawer.
     */
    public async show(): Promise<CloseReason | UserDismissed> {
        if (this.open) {
            throw new Error('Dialog is already open');
        }
        this.openDialog();
        return new Promise((resolve, _reject) => {
            this.resolveShow = resolve;
        });
    }

    /**
     * Closes the dialog
     * @param reason An optional value indicating how/why the dialog was closed.
     */
    public close(reason: CloseReason): void {
        if (!this.open) {
            throw new Error('Dialog is not open');
        }
        this.closeReason = reason;
        this.closeDialog();
    }

    @attr({ attribute: 'prevent-dismiss' })
    public preventDismiss = false;

    public dialog!: HTMLDialogElement;

    private readonly transitionEndHandlerFunction = (): void => this.transitionEndHandler();
    private closing = false;

    private openDialog(): void {
        this.dialog.showModal();
        this.triggerAnimation(true);
    }

    private closeDialog(): void {
        this.triggerAnimation(false);
    }

    private triggerAnimation(opening: boolean): void {
        this.dialog.classList.remove('animation-complete');
        this.closing = !opening;
        if (opening) {
            this.dialog.classList.add('open');
        } else {
            this.dialog.classList.remove('open');
        }

        this.dialog.addEventListener(eventTransitionEnd, this.transitionEndHandlerFunction);
    }

    private transitionEndHandler(): void {
        this.dialog.classList.add('animation-complete');
        this.dialog.removeEventListener(eventTransitionEnd, this.transitionEndHandlerFunction);
        if (this.closing) {
            this.dialog.close();
            this.resolveShow!(this.closeReason);
            this.resolveShow = undefined;
        }
    }

    /**
     * @internal
     */
    public cancelHandler(event: Event): boolean {
        // Allowing the dialog to close itself bypasses the drawer's animation logic, so we
        // should close the drawer ourselves when preventDismiss is not true.
        event.preventDefault();

        if (!this.preventDismiss) {
            this.closeReason = USER_DISMISSED;
            this.closeDialog();
        }
        return true;
    }
}

const nimbleDrawer = Drawer.compose({
    baseName: 'drawer',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleDrawer());
