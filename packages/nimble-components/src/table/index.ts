import { Observable, ViewTemplate, css } from '@microsoft/fast-element';
import { DataGridCell, DesignSystem, FoundationElement } from '@microsoft/fast-foundation';
import {
    ColumnDef,
    TableState,
    Updater,
    Table as TanstackTable,
    createTable,
    getCoreRowModel,
    TableOptionsResolved,
    getSortedRowModel,
    SortingState,
    SortDirection,
    Column
} from '@tanstack/table-core';
import { VirtualList, virtualListTemplate } from '../virtual-list';
import { template } from './template';
import { styles } from './styles';
import type { TableCell } from '../table-cell';
import { TableRow, TableRowData } from '../table-row';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-table': Table;
    }
}

export interface TableColumn {
    columnDataKey: string;
    gridColumn?: string;
    title?: string;
    headerCellTemplate?: ViewTemplate;
    headerCellInternalFocusQueue?: boolean;
    headerCellFocusTargetCallback?: (cell: DataGridCell) => HTMLElement;
    cellTemplate?: ViewTemplate<TableCell, TableCell>;
    cellInternalFocusQueue?: boolean;
    cellFocusTargetCallback?: (cell: DataGridCell) => HTMLElement;
    isRowHeader?: boolean;
}

export interface TableHeader {
    title: string;
    sortingState: SortDirection | false;
    column: Column<unknown>;
}

export interface ColumnSortState {
    id: string;
    sortDirection: SortDirection | undefined;
}

interface ObjectInterface {
    [key: string]: unknown;
}

const virtualListStyle = css`
    .container {
        position: relative;
    }
`;

/**
 * Table
 */
export class Table extends FoundationElement {
    /** @internal */
    public readonly rowContainer!: HTMLElement;
    public readonly viewPort!: HTMLElement;
    public totalListSize = 0;

    private readonly table: TanstackTable<unknown>;
    private _data: unknown[] = [];
    private _columns: TableColumn[] = [];
    private _rows: TableRowData[] = [];
    private _visibleTableRows: TableRowData[] = [];
    private _headers: TableHeader[] = [];
    private _options: TableOptionsResolved<unknown>;
    private _sorting: SortingState = [];
    private _tanstackcolumns: ColumnDef<unknown>[] = [];
    private _ready = false;
    private _rowOffset = 0;
    private readonly _rowHeight = 32;
    private resizeObserver?: ResizeObserver;
    private _currentRowElements: TableRow[] = [];
    private readonly _elementBufferSize = 5;

    // stored geometry for the viewport and internal container elements
    private _viewportRect: DOMRect | undefined;
    private _containerRect: DOMRect | undefined;
    private _rowContainerShadow?: Node;

    public constructor() {
        super();
        const data = this.data;
        const tanstackColumns = this._tanstackcolumns;
        const sorting = this._sorting;
        this._options = {
            get data(): unknown[] {
                return data ?? [];
            },
            onStateChange: (_: Updater<TableState>) => { },
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            onSortingChange: this.setSorting,
            columns: tanstackColumns,
            state: {
                sorting
            },
            renderFallbackValue: null,
        };
        this.table = createTable(this._options);
    }

    public override connectedCallback(): void {
        super.connectedCallback();
        this.viewPort?.addEventListener('scroll', e => this.handleScroll(e, this), { passive: true, capture: true });
        const rowContainer = this.rowContainer;
        const viewPort = this.viewPort;
        this._rowContainerShadow = this.rowContainer.attachShadow({ mode: 'open' });
        this.resizeObserver = new ResizeObserver(entries => {
            if (entries.map(entry => entry.target).includes(rowContainer)) {
                this._containerRect = rowContainer.getBoundingClientRect();
                this._viewportRect = viewPort.getBoundingClientRect();
                this.updateDimensions();
            }
        });

        this.resizeObserver.observe(this.rowContainer);
    }

    public get data(): unknown[] {
        Observable.track(this, 'data');
        return this._data;
    }

    public set data(value: unknown[]) {
        this._data = value;
        Observable.notify(this, 'data');
        this._options = { ...this._options, data: this.data };
    }

    public get columns(): TableColumn[] {
        return this._columns;
    }

    public set columns(value: TableColumn[]) {
        this._tanstackcolumns = [];
        this._columns = value;
        value.forEach(column => {
            const tanstackColumn: ColumnDef<unknown> = {
                id: column.columnDataKey,
                accessorFn: (row: unknown) => {
                    const keys = Object.keys(row as ObjectInterface);
                    const valueIndex = keys.indexOf(column.columnDataKey);
                    return Object.values(row as ObjectInterface)[valueIndex];
                },
                header: column.title,
                footer: info => info.column.id,
            };
            this._tanstackcolumns.push(tanstackColumn);
        });
        this._options = { ...this._options, columns: this._tanstackcolumns };
        this.update(this.table.initialState);
        this.refreshRows();
        this.refreshHeaders();
        this.table.getColumn(this.columns[0]?.columnDataKey ?? '').toggleSorting();
        this.ready = true;
        Observable.notify(this, 'ready');
    }

    public get ready(): boolean {
        Observable.track(this, 'ready');
        return this._ready;
    }

    public set ready(value: boolean) {
        this._ready = value;
        Observable.notify(this, 'ready');
    }

    public get tableRows(): TableRowData[] {
        Observable.track(this, 'tableRows');
        return this._rows;
    }

    public set tableRows(value: TableRowData[]) {
        this._rows = value;
        this.updateDimensions();
        Observable.notify(this, 'tableRows');
    }

    public get visibleTableRows(): TableRowData[] {
        return this._visibleTableRows;
    }

    public set visibleTableRows(value: TableRowData[]) {
        this._visibleTableRows = value;
    }

    public get tableHeaders(): TableHeader[] {
        Observable.track(this, 'tableHeaders');
        return this._headers;
    }

    public set tableHeaders(value: TableHeader[]) {
        this._headers = value;
        Observable.notify(this, 'tableHeaders');
    }

    public getColumnTemplate(index: number): ViewTemplate {
        const column = this.columns[index]!;
        return column.cellTemplate!;
    }

    private readonly setSorting = (updater: unknown): void => {
        if (updater instanceof Function) {
            this._sorting = updater(this._sorting) as SortingState;
        } else {
            this._sorting = (updater as SortingState);
        }

        this._options.state = { ...this._options.state, sorting: this._sorting };
        this.update({ ...this.table.initialState, sorting: this._sorting });
        this.refreshRows();
        this.refreshHeaders();
    };

    private refreshRows(): void {
        const rows = this.table.getRowModel().rows;
        let currentRowOffset = 0;
        this.tableRows = rows.map(row => {
            const tableRow = { row, parent: this, rowPixelOffset: currentRowOffset, rowSize: 32 } as TableRowData;
            currentRowOffset += this._rowHeight;
            return tableRow;
        });
    }

    private refreshHeaders(): void {
        const headerGroups = this.table.getHeaderGroups();
        const headers = headerGroups.length > 0 ? headerGroups[0]?.headers : [];
        this.tableHeaders = headers!.map(header => {
            return ({
                title: this.columns.length > 0 ? this.columns[header.index]!.title : '',
                sortingState: header.column.getIsSorted(),
                column: header.column
            }) as TableHeader;
        });
    }

    private readonly update = (state: TableState): void => {
        this.table.setOptions(prev => ({
            ...prev,
            ...this._options,
            state,
            onStateChange: (updater: unknown) => {
                const updatedState = typeof updater === 'function' ? updater(state) as TableState : updater as TableState;
                this.update(updatedState);
            },
        }));
    };

    private readonly handleScroll = (event: Event, table: Table): void => {
        const scrollTop = (event.target as HTMLElement).scrollTop;
        this._rowOffset = scrollTop / table._rowHeight;
        for (let i = 0; i < table._currentRowElements?.length ?? 0; i++) {
            const rowIndex = Math.trunc(this._rowOffset + i);
            this._currentRowElements[i]!.rowData = table._rows[rowIndex]!;
        }
    };

    private renderVisibleRows(): void {
        if (this._viewportRect === undefined) {
            return;
        }

        this.clearRowElements();
        let totalRenderedHeight = 0;
        let renderedRowIndex = 0;
        while (totalRenderedHeight < (this._viewportRect.height + (this._elementBufferSize * this._rowHeight))
                && this._rowOffset + renderedRowIndex < this._rows.length) {
            const currentRow = this._rows[this._rowOffset + renderedRowIndex]!;
            const visibleRow = { row: currentRow.row, parent: this, rowPixelOffset: currentRow.rowPixelOffset, rowSize: 32 } as TableRowData;
            visibleRow.rowPixelOffset = currentRow.rowPixelOffset;
            const rowElement = new TableRow(this, visibleRow);
            this._rowContainerShadow?.appendChild(rowElement);
            renderedRowIndex += 1;
            totalRenderedHeight += visibleRow.rowSize;
            this._currentRowElements.push(rowElement);
            this._visibleTableRows.push(visibleRow);
        }
    }

    private clearRowElements(): void {
        this.visibleTableRows = [];
        this._currentRowElements.forEach(rowElement => {
            rowElement.remove();
        });

        this._currentRowElements = [];
    }

    /**
     * updates the dimensions of the list
     */
    private readonly updateDimensions = (): void => {
        this.totalListSize = 32 * this._rows.length;

        this.renderVisibleRows();
    };
}

const nimbleTable = Table.compose({
    baseName: 'table',
    template,
    styles,
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleTable());

export const fastVirtualList = VirtualList.compose({
    baseName: 'virtual-list',
    baseClass: VirtualList,
    template: virtualListTemplate,
    styles: virtualListStyle
});

DesignSystem.getOrCreate().withPrefix('fast').register(fastVirtualList());
