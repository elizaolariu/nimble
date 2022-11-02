import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { ComboboxAutocomplete, DropdownAppearance, processUpdates } from '../../../public-api';
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
                <nimble-combobox #combobox>
                    <nimble-list-option value="one">One</nimble-list-option>
                    <nimble-list-option value="two">Two</nimble-list-option>
                    <nimble-list-option value="three">Three</nimble-list-option>
                    <nimble-list-option value="four" disabled>Four</nimble-list-option>
                </nimble-combobox>
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

        it('clearText() removes text in async test', async () => {
            await pageObject.setText('two');
            await pageObject.clearText();

            expect(nativeElement.value).toBe('');
        });

        it('setText() affects element in async test', async () => {
            await pageObject.setText('two');

            expect(nativeElement.value).toBe('Two');
        });

        it('setText() affects element in fakeAsync test', fakeAsync(() => {
            pageObject.setText('two');

            expect(nativeElement.value).toBe('Two');
        }));

        it('setText() clears existing text in async test', async () => {
            await pageObject.setText('one');
            await pageObject.setText('two');

            expect(nativeElement.value).toBe('Two');
        });

        it('clickInput() opens menu in async test', async () => {
            expect(nativeElement.open).toBeFalse();

            await pageObject.clickInput();

            expect(nativeElement.open).toBeTrue();
        });

        it('selectText() selects text in async test', async () => {
            await pageObject.setText('one');
            await pageObject.selectText();
            await pageObject.pressKeys('foo');

            expect(nativeElement.value).toBe('foo');
        });

        it('pressKeys(ESC) closes menu in async test', async () => {
            await pageObject.clickInput();

            expect(nativeElement.open).toBeTrue();

            await pageObject.pressKeys('{Escape}');

            expect(nativeElement.open).toBeFalse();
        });
    });
});
