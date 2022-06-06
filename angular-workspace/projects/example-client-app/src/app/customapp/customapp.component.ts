/* eslint-disable no-alert */
import { Component, Input } from '@angular/core';
import { DrawerLocation, MenuItem } from '@ni/nimble-angular';

@Component({
    selector: 'example-customapp',
    templateUrl: './customapp.component.html',
    styleUrls: ['./customapp.component.scss']
})
export class CustomAppComponent {
    public drawerLocation: DrawerLocation = DrawerLocation.right;
    public isDrawerPinned = false;
    public drawerLocations = DrawerLocation;

    public onMenuButtonMenuChange(event: Event): void {
        const menuItemText = (event.target as MenuItem).innerText;
        alert(`${menuItemText} selected`);
    }

    /**
     * Set the currently active tab index
     */
    @Input() public set activeTabIndex(value: string) {
        console.log(`${value}`);
        // this.activeIndex = value;
        // this.changeDetectorRef.detectChanges();
    }
}
