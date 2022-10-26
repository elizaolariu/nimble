import type { Meta, StoryObj } from '@storybook/html';
import '../../all-components';
import { html, ref, when } from '@microsoft/fast-element';
import { createUserSelectedThemeStory } from '../../utilities/tests/storybook';
import { getColumns, makeData } from './makedata';
import type { TableColumn } from '..';
import type { NumberFieldColumn } from '../../table-column-providers/number-field-column';
import type { Button } from '../../button';

interface TableArgs {
    data: unknown[];
    columns: TableColumn[];
    ageColumn: NumberFieldColumn;
    button: Button;
    statusVisible: boolean;
    changeStep: (ageColumn: NumberFieldColumn, button: Button) => void;
}

const metadata: Meta<TableArgs> = {
    title: 'Table',
    // prettier-ignore
    render: createUserSelectedThemeStory(html`
        <nimble-table style="max-height: 500px"
            :data="${x => x.data}"
        >

            <nimble-text-field-column columnId="firstName" columnTitle="First Name"></nimble-text-field-column>
            <nimble-text-field-column columnId="lastName" columnTitle="Last Name"></nimble-text-field-column>
            <nimble-number-field-column ${ref('ageColumn')} columnId="age" columnTitle="Age" step="1"></nimble-number-field-column>
            <nimble-text-field-column columnId="visits" columnTitle="Visits"></nimble-text-field-column>
            ${when(x => x.statusVisible, html`
                <nimble-text-field-column columnId="status" columnTitle="Status"></nimble-text-field-column>
            `)}
            <nimble-number-field-column columnId="progress" columnTitle="Progress" step="2"></nimble-number-field-column>
        </nimble-table>
        <br>
        <nimble-button ${ref('button')} appearance="block" @click="${x => x.changeStep(x.ageColumn, x.button)}">Age step: ${x => x.ageColumn.step}</nimble-button>
    `),
    args: {
        data: makeData(2000),
        columns: getColumns(),
        changeStep: (ageColumn: NumberFieldColumn, button: Button) => {
            const newStep = Math.floor(Math.random() * 10);
            ageColumn.step = newStep;
            button.value = newStep.toFixed();
        },
        statusVisible: false,
    }
};

export default metadata;

export const tableStory: StoryObj<TableArgs> = {
    name: 'Table'
};
