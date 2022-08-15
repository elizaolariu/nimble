import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import type { Drawer, UserDismissed } from '@ni/nimble-components/dist/esm/drawer';
import { DrawerLocation, DrawerDismissBehavior } from '@ni/nimble-components/dist/esm/drawer/types';
import { BooleanValueOrAttribute, toBooleanProperty } from '../utilities/template-value-helpers';

export type { Drawer };
export { DrawerLocation, DrawerDismissBehavior };

/**
 * Directive to provide Angular integration for the drawer.
 */
@Directive({
    selector: 'nimble-drawer'
})
export class NimbleDrawerDirective {
    public get location(): DrawerLocation {
        return this.elementRef.nativeElement.location;
    }

    @Input() public set location(value: DrawerLocation) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'location', value);
    }

    public get keyboardDismiss(): DrawerDismissBehavior {
        return this.elementRef.nativeElement.keyboardDismiss;
    }

    // clickDismiss property intentionally maps to the click-dismiss attribute
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('keyboard-dismiss') public set keyboardDismiss(value: DrawerDismissBehavior) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'keyboardDismiss', value);
    }

    public get clickDismiss(): DrawerDismissBehavior {
        return this.elementRef.nativeElement.clickDismiss;
    }

    // clickDismiss property intentionally maps to the click-dismiss attribute
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('click-dismiss') public set clickDismiss(value: DrawerDismissBehavior) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'clickDismiss', value);
    }

    public get modal(): boolean {
        return this.elementRef.nativeElement.modal;
    }

    @Input() public set modal(value: BooleanValueOrAttribute) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'modal', toBooleanProperty(value));
    }

    @Output() public closing = new EventEmitter<void>();
    public constructor(private readonly renderer: Renderer2, private readonly elementRef: ElementRef<Drawer>) {}

    public async show(): Promise<unknown> {
        return this.elementRef.nativeElement.show();
    }

    public close(): void {
        this.elementRef.nativeElement.close();
    }

    @HostListener('close', ['$event'])
    public onClose($event: Event): void {
        if ($event.target === this.elementRef.nativeElement) {
            this.closing.emit();
        }
    }
}
