import type { Meta, StoryObj } from '@storybook/html';
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
    parameters: {
        actions: {
            handles: ['change', 'input']
        }
    },
    // prettier-ignore
    render: createUserSelectedThemeStory(html`
        <div style="display: flex; flex-direction: row;">
            <nimble-table style="max-height: 500px;"
                :data="${x => x.data}"
                :columns="${x => x.columns}"
            > 
            </nimble-table>
        </div>
    `),
    args: {
        data: makeData(50),
        columns: getColumns()
    }
};

export default metadata;

export const tableStory: StoryObj<TableArgs> = {
    name: 'Table'
};
