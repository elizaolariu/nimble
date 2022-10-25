import type { Meta, StoryObj } from '@storybook/html';
import { withXD } from 'storybook-addon-xd-designs';
import '../../all-components';
import { html } from '@microsoft/fast-element';
import { createUserSelectedThemeStory } from '../../utilities/tests/storybook';
import { getColumns, makeData } from './makedata';
import type { TableColumn } from '../index';

interface TableArgs {
    data: unknown[];
    columns: TableColumn[];
}

const metadata: Meta<TableArgs> = {
    title: 'Table',
    // prettier-ignore
    render: createUserSelectedThemeStory(html`
        <nimble-table style="max-height: 500px"
            :data="${x => x.data}"
        >
            <nimble-text-field-column columnId="firstName"></nimble-text-field-column>
            <nimble-text-field-column columnId="lastName"></nimble-text-field-column>
            <nimble-number-field-column columnId="age" step="1"></nimble-number-field-column>
            <nimble-text-field-column columnId="visits"></nimble-text-field-column>
            <nimble-text-field-column columnId="status"></nimble-text-field-column>
            <nimble-number-field-column columnId="progress" step="2"></nimble-number-field-column>
        </nimble-table>
    `),
    args: {
        data: makeData(2000),
        columns: getColumns()
    }
};

export default metadata;

export const tableStory: StoryObj<TableArgs> = {
    name: 'Table'
};
