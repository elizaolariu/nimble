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

    xit('should respect "open" and "position" attributes when both set', async () => {
        const position = 'above';
        const { element, connect, disconnect } = await setup(position, true);

        await connect();
        await DOM.nextUpdate();

        expect(element.getAttribute('open')).not.toBeNull();
        expect(element.getAttribute('position')).toBe(position);

        await disconnect();
    });

    xit('should keep selected value when options change', async () => {
        const { element, connect, disconnect } = await setup();
        await connect();
        element.value = 'two';
        await DOM.nextUpdate();
        expect(element.value).toBe('Two');

        // Add option zero at the top of the options list
        // prettier-ignore
        element.insertAdjacentHTML(
            'afterbegin',
            '<nimble-list-option value="zero">Zero</nimble-list-option>'
        );
        await DOM.nextUpdate();

        expect(element.value).toBe('Two');

        await disconnect();
    });
});
