import { Component, ElementRef, ViewChild } from '@angular/core';
import { Checkbox } from '@ni/nimble-components/dist/esm/checkbox';

@Component({
    selector: 'app-test',
    // templateUrl: './test.component.html',
    template: '<nimble-checkbox #checkbox [checked]="value" (change)="valueChanged()" [disabled]="fieldDisabled"></nimble-checkbox>',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    @ViewChild('checkbox', { static: true }) public checkbox: ElementRef<Checkbox>;

    public readonly initialValue = true;
    public value = this.initialValue;
    public fieldDisabled = false;

    public valueChanged(): void {
        this.value = this.checkbox.nativeElement.checked;
    }
}
