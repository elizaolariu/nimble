import { Component, Input, ViewChild } from '@angular/core';
import { DrawerLocation, NimbleDrawerDirective } from '@ni/nimble-angular';

@Component({
    selector: 'example-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent {
    public isDrawerPinned = false;
    public drawerLocations = DrawerLocation;
    @Input() public location: DrawerLocation = DrawerLocation.right;
    @ViewChild('drawerReference', { read: NimbleDrawerDirective }) public drawer: NimbleDrawerDirective;

    public open(): void {
        void this.drawer.show();
    }

    public togglePinned(): void {
        this.isDrawerPinned = !this.isDrawerPinned;
        if (this.isDrawerPinned) {
            void this.drawer.show();
        } else {
            this.drawer.close();
        }
    }
}
