import { html, when, repeat, ViewTemplate, ref } from '@microsoft/fast-element';
import type { FoundationElementTemplate, VirtualList } from '@microsoft/fast-foundation';
import type { Cell } from '@tanstack/table-core';
import type { Table, TableHeader, TableRow } from '.';

const rowTemplate = html<TableRow, VirtualList>`
    <div style="
            transform: ${(_, c) => `translateY(${c.parent.visibleItemSpans[c.index]?.start ?? 0}px)`};
        "
        class="table-row">
        ${repeat(x => x.row.getVisibleCells(), html<Cell<unknown, unknown>>`
            <nimble-table-cell 
                :cellItemTemplate=${(_, c) => (c.parent as TableRow)!.parent.getColumnTemplate(c.index)}
                :cellData=${x => x.getValue()} 
                >
            </nimble-table-cell>
        `, { positioning: true })}
    </div>
`;

export const template: FoundationElementTemplate<ViewTemplate<Table>> = _ => html<Table>`
${when(
        x => x.ready,
        html<Table>`
        <template>
            <div class="table-container">
                <div class="table-header"> 
                    ${repeat(x => x.tableHeaders, html<TableHeader>`
                        <nimble-button appearance="ghost" @click=${x => { x.column.toggleSorting(); }}>
                            ${when(x => x.column.getIsSorted() === 'asc', html`
                                <nimble-icon-arrow-expander-up slot="end"></nimble-icon-arrow-expander-up>
                            `)}
                            ${when(x => x.column.getIsSorted() === 'desc', html`
                                <nimble-icon-arrow-expander-down slot="end"></nimble-icon-arrow-expander-down>
                            `)}
                            <span>${x => x.title}</span>
                        </nimble-button>
                    `, { positioning: true })}
                </div>
                <fast-virtual-list
                    ${ref('virtualList')}
                    class="table-body"
                    orientation="vertical"
                    auto-update-mode="auto"
                    item-span="32"
                    :itemTemplate=${rowTemplate}
                    :items=${x => x.tableRows}
                    viewport-buffer="200"
                ><fast-virtual-list>
            </div>
        </template>
    `
    )}`;
