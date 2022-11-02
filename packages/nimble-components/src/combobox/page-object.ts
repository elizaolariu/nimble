import userEvent from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import type { Combobox } from '.';
import { processUpdates } from '../testing/async-helpers';

/**
 * Page object for the Nimble Combobox.
 */
export class PageObject {
    private readonly user: UserEvent;
    public constructor(private readonly combobox: Combobox) {
        this.user = userEvent.setup();
    }

    public async clearText(): Promise<void> {
        await this.selectText();
        await this.pressKeys('{Delete}');
        processUpdates();
    }

    public async setText(text: string): Promise<void> {
        if (text !== '') {
            await this.clearText();
            await this.user.type(this.combobox, text);
        } else {
            throw new Error('Empty text is not valid input for this method. Call clearText() instead.');
        }
        processUpdates();
    }

    public async clickInput(): Promise<void> {
        await this.user.click(this.combobox);
        processUpdates();
    }

    public async selectText(): Promise<void> {
        await this.user.dblClick(this.combobox.control);
    }

    public async pressKeys(keys: string): Promise<void> {
        await this.user.keyboard(keys);
        processUpdates();
    }
}