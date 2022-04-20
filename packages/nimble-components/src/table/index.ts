import { DesignSystem, FoundationElement } from '@microsoft/fast-foundation';
import 'regular-table';
import type { RegularTableElement } from 'regular-table';
import { styles } from './styles';
import { template } from './template';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-table': Table;
    }
}

export class Table extends FoundationElement {
    private readonly NUM_ROWS: number = 10000;

    private readonly NUM_COLUMNS: number = 1000;

    private _selectedRows: number[] = [];

    private readonly formatter = new Intl.NumberFormat('en-us');

    private regularTable: RegularTableElement | null | undefined;

    public override connectedCallback(): void {
        super.connectedCallback();
        this.regularTable = this.shadowRoot?.children.item(0) as RegularTableElement;
        this.regularTable.setDataListener(this.test_data_model);
        this.regularTable.draw();
        this.regularTable.addEventListener('mousedown', this.handleTableClick);
        this.regularTable.addStyleListener(this.tableStyleListener);
    }

    private readonly clamp = (x: number, y: number, offset = 0): string => `${Math.floor(x / y) * y + offset} `;

    private readonly test_data_model = (x0: number, y0: number, x1: number, y1: number): any => {
        const data = [];
        const column_headers: string[][] = [];
        for (let i = x0; i < x1; i++) {
            const column: string[] = [];
            data.push(column);
            column_headers.push([`Group ${this.clamp(i, 10)}`, `Column ${i}`]);
            for (let j = y0; j < y1; j++) {
                column.push(this.formatter.format(j + i));
            }
        }

        const row_headers: string[][] = [];
        for (let j = y0; j < y1; j++) {
            row_headers.push([`Group  ${this.clamp(j, 10, 0)}`, `Row ${j}`]);
        }

        return {
            num_rows: this.NUM_ROWS,
            num_columns: this.NUM_COLUMNS,
            row_headers,
            column_headers,
            data,
        };
    };

    private readonly handleTableClick = (event: Event): void => {
        const meta = this.regularTable?.getMeta(event.target as HTMLTableCellElement);
        this._selectedRows = [];
        if (meta) {
            this._selectedRows.push(meta.y!);
            this.regularTable?.draw();
        }
    };

    private readonly tableStyleListener = (): void => {
        this.regularTable?.querySelectorAll('td').forEach(el => {
            const meta = this.regularTable?.getMeta(el);
            if (meta) {
                el.classList.toggle('row-selected', this._selectedRows.includes(meta.y!));
            }
        });
    };
}

const nimbleTable = Table.compose({
    baseName: 'table',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleTable());
