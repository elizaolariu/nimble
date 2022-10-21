import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ComboboxAutocomplete, DropdownAppearance } from '../../../public-api';
import type { BooleanValueOrAttribute } from '../../utilities/template-value-helpers';
import { Combobox, NimbleComboboxDirective } from '../nimble-combobox.directive';
import { NimbleComboboxModule } from '../nimble-combobox.module';
import { NimbleComboboxPageObject } from '../nimble-combobox.page-object';

describe('Nimble combobox page object', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NimbleComboboxModule]
        });
    });

    describe('in async test', () => {
        @Component({
            template: `
                <nimble-combobox #combobox></nimble-combobox>
            `
        })
        class TestHostComponent {
            @ViewChild('combobox', { read: NimbleComboboxDirective }) public directive: NimbleComboboxDirective;
            @ViewChild('combobox', { read: ElementRef }) public elementRef: ElementRef<Combobox>;
        }

        let fixture: ComponentFixture<TestHostComponent>;
        let directive: NimbleComboboxDirective;
        let nativeElement: Combobox;
        let pageObject: NimbleComboboxPageObject;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestHostComponent],
                imports: [NimbleComboboxModule]
            });
            fixture = TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            directive = fixture.componentInstance.directive;
            nativeElement = fixture.componentInstance.elementRef.nativeElement;
            pageObject = new NimbleComboboxPageObject(nativeElement);
        });

        it('can be constructed', () => {
            expect(pageObject).toBeTruthy();
        });

        it('setText() affects element in async test', async () => {
            await pageObject.setText('two');
            
            expect(nativeElement.value).toBe('Two');
        });

        it('setText() affects element in fakeAsync test', fakeAsync(() => {
            pageObject.setText('two');

            expect(nativeElement.value).toBe('Two');
        }));
    });
});
