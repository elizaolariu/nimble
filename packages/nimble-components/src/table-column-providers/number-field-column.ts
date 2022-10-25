import { attr, html, observable, ViewTemplate } from '@microsoft/fast-element';
import { DesignSystem, FoundationElement } from '@microsoft/fast-foundation';
import type { TableCell } from '../table-cell';
import type { IColumnProvider } from '../table-column-registry/column-provider';

/**
 * A provider for number cell content for a table
 */
export class NumberFieldColumn extends FoundationElement implements IColumnProvider {
    @attr
    public columnId?: string;

    @attr
    public step?: number;

    public getColumnTemplate(): ViewTemplate<unknown, TableCell> {
        const step = this.step;
        return html<TableCell, TableCell>`
            <nimble-number-field value=${x => x.cellData} step=${_ => step}>
            </nimble-number-field>
        `;
    }
}

const nimbleNumberFieldColumn = NumberFieldColumn.compose({
    baseName: 'number-field-column'
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleNumberFieldColumn());