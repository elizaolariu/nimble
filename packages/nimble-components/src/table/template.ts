import { html, when, repeat, ViewTemplate, ref } from '@microsoft/fast-element';
import type { FoundationElementTemplate, VirtualList } from '@microsoft/fast-foundation';
import type { Cell } from '@tanstack/table-core';
import type { Table, TableHeader } from '.';
import type { TableRow } from '../table-row';

// const rowTemplate = html<TableRow>`
//     <div style="
//             transform: ${x => `translateY(${x.rowPixelOffset ?? 0}px)`};
//         "
//         class="table-row">
//         ${repeat(x => x.visibleCells, html<Cell<unknown, unknown>>`
//             <nimble-table-cell 
//                 :cellItemTemplate=${(_, c) => (c.parent as TableRow)!.parent.getColumnTemplate(c.index)}
//                 :cellData=${x => x.getValue()} 
//                 >
//             </nimble-table-cell>
//         `, { positioning: true })}
//     </div>
// `;

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
                <div class="table-viewport" ${ref('viewPort')}>
                    <div class="table-body" ${ref('rowContainer')}
                        style="height: ${x => x.totalListSize}px">
                    </div>
                </div>
            </div>
        </template>
    `
    )}`;
