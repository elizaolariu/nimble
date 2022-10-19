import { DOM, html } from '@microsoft/fast-element';
import { fixture, Fixture } from '../../utilities/tests/fixture';
import type { Combobox } from '..';
import '../../list-option';
import { NimbleComboboxPageObject } from './combobox.pageobject';

async function setup(
    position?: string,
    open?: boolean
): Promise<Fixture<Combobox>> {
    const viewTemplate = html`
        <nimble-combobox
            ${position !== undefined ? `position="${position}"` : ''}
            ${open ? 'open' : ''}
        >
            <nimble-list-option value="one">One</nimble-list-option>
            <nimble-list-option value="two">Two</nimble-list-option>
            <nimble-list-option value="three">Three</nimble-list-option>
            <nimble-list-option value="four" disabled>Four</nimble-list-option>
        </nimble-combobox>
    `;
    return fixture<Combobox>(viewTemplate);
}

fdescribe('NimbleComboboxPageObject', () => {
    it('can be created from a Combobox not in the page', async () => {
        const { element } = await setup();
        const pageObject = new NimbleComboboxPageObject(element);

        expect(pageObject).toBeTruthy();
    });

    it('can be created from a Combobox in the page', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        expect(pageObject).toBeTruthy();

        await disconnect();
    });

    it('setText() to valid item results in value updating', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        await pageObject.setText('two');

        expect(element.value).toBe('Two');

        await disconnect();
    });

    it('setText() to invalid item results in value updating', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        await pageObject.setText('none of the items match this string');

        expect(element.value).toBe('none of the items match this string');

        await disconnect();
    });

    it('clickInput() sets the focus to the combobox element', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        expect(document.activeElement).not.toBe(element);

        await pageObject.clickInput();

        expect(document.activeElement).toBe(element);

        await disconnect();
    });

    it('selectText() sets selection', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        await pageObject.setText('Two');
        await pageObject.selectText();

        expect(document.activeElement).toBe(element);
        expect(document.getSelection()?.toString()).toBe('Two');

        await disconnect();
    });

    it('pressKeys() with simple string sets value', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        await pageObject.clickInput();
        await pageObject.pressKeys('two');

        expect(element.value).toBe('Two');

        await disconnect();
    });

    it('pressKeys() with control keys sets value', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        const pageObject = new NimbleComboboxPageObject(element);

        await pageObject.clickInput();
        await pageObject.pressKeys('{x}{y}{Delete}');

        expect(element.value).toBe('xy');

        await disconnect();
    });
});
