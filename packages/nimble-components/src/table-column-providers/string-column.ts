import { html, ViewTemplate } from '@microsoft/fast-element';
import { DesignSystem, FoundationElement } from '@microsoft/fast-foundation';
import { Table } from '../table';
import type { TableCell } from '../table-cell';
import type { IColumnProvider } from '../table-column-registry/column-provider';

/**
 * A provider for string cell content for a table
 */
export class StringColumn extends FoundationElement implements IColumnProvider {
    public columnId?: string;

    public getColumnTemplate(): ViewTemplate<unknown, TableCell> {
        return html<TableCell, TableCell>`
            <nimble-text-field appearance="frameless" readonly="true" value=${x => x.cellData}>
            </nimble-text-field>
        `;
    }
}

const nimbleStringColumn = Table.compose({
    baseName: 'string-column'
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleStringColumn());