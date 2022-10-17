import type { Meta, StoryObj } from '@storybook/html';
import { withXD } from 'storybook-addon-xd-designs';
import '../../all-components';
import { html } from '@microsoft/fast-element';
import { createUserSelectedThemeStory } from '../../utilities/tests/storybook';
import { getColumns } from './makedata';
import type { TableColumn } from '../index';

interface TableArgs {
    data: unknown[];
    columns: TableColumn[];
}

const metadata: Meta<TableArgs> = {
    title: 'Table',
    parameters: {
        actions: {
            handles: ['change', 'input']
        }
    },
    // prettier-ignore
    render: createUserSelectedThemeStory(html`
        <nimble-table style="max-height: 500px"
            :columns="${x => x.columns}"
        >
        </nimble-table>
    `),
    args: {
        columns: getColumns()
    }
};

export default metadata;

export const tableStory: StoryObj<TableArgs> = {
    name: 'Table'
};
