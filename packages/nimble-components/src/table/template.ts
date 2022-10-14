import { html, when, repeat, ViewTemplate, ref, slotted, elements } from '@microsoft/fast-element';
import type { FoundationElementTemplate } from '@microsoft/fast-foundation';
import type { VirtualItem } from '@tanstack/virtual-core';
import type { Table, TableHeader } from '.';
import { TableRow } from '../table-row';

// export const template = html<Table>`
// ${when(
//         x => x.ready,
//         html<Table>`
//         <template>
//             <table>
//                 <slot slot="column-cell-templates"></slot>
//                 <thead>
//                     <tr>
//                     ${repeat(x => x.tableHeaders, html<TableHeader>`
//                         <th>
//                             <nimble-button appearance="ghost" @click=${x => { x.column.toggleSorting(); }}>
//                                 ${when(x => x.column.getIsSorted() === 'asc', html`
//                                     <nimble-icon-arrow-expander-up slot="end"></nimble-icon-arrow-expander-up>
//                                 `)}
//                                 ${when(x => x.column.getIsSorted() === 'desc', html`
//                                     <nimble-icon-arrow-expander-down slot="end"></nimble-icon-arrow-expander-down>
//                                 `)}
//                                 <span>${x => x.title}</span>
//                             </nimble-button>
//                         </th>
//                     `, { positioning: true })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                 ${repeat(x => x.tableRows, html<TableRow>`
//                     <tr>
//                         ${repeat(x => x.row.getVisibleCells(), html<Cell<unknown, unknown>>`
//                             <td>
//                                 <nimble-table-cell 
//                                     :cellItemTemplate=${(_, c) => (c.parentContext.parent as Table)!.getColumnTemplate(c.index)}
//                                     :cellData=${x => x.getValue()} 
//                                     >
//                                 </nimble-table-cell>
//                             </td>
//                         `, { positioning: true })}
//                     `)}
//                     </tr>
//                 </tbody>
//             </table>
//         </template>
//     `
//     )}`;
export const template: FoundationElementTemplate<ViewTemplate<Table>> = context => html<Table>`
<template>
    <!-- <span style="display: none;">
        <slot name="menu" ${slotted({ property: 'slottedActionMenus', filter: elements('[role=menu]') })}></slot>
        </slot>
    </span> -->
    <nimble-menu-button content-hidden appearance="block">
        <nimble-icon-key slot="start"></nimble-icon-key>
        <slot name="actionMenu" slot="menu"></slot>
        <!-- <nimble-menu slot="menu">
            <slot name="actionMenu" slot="menu"></slot>
            <slot name="actionMenuItem"></slot>
        </nimble-menu> -->
    </nimble-menu-button>

    <div class="table-container" ${ref('tableContainer')}>
        <div class="table-header"> 
            ${repeat(x => x.tableHeaders, html<TableHeader>`
                <nimble-menu-button appearance="ghost">
                    ${when(x => x.column.getIsSorted() === 'asc', html`
                        <nimble-icon-arrow-expander-up slot="end"></nimble-icon-arrow-expander-up>
                    `)}
                    ${when(x => x.column.getIsSorted() === 'desc', html`
                        <nimble-icon-arrow-expander-down slot="end"></nimble-icon-arrow-expander-down>
                    `)}
                    ${when(x => x.column.getIsGrouped(), html`
                        <nimble-icon-hashtag slot="start"></nimble-icon-hashtag>
                    `)}
                    <span>${x => x.title}</span>

                    <nimble-menu slot="menu">
                        <nimble-menu-item @change=${x => { x.column.toggleSorting(); }}>Toggle sorting</nimble-menu-item>
                        <nimble-menu-item @change=${x => { x.column.toggleGrouping(); }}>Toggle grouping</nimble-menu-item>
                    </nimble-menu>
                </nimble-menu-button>
            `, { positioning: true })}
        </div>
        <div class="table-viewport" ${ref('viewport')}>
            <div class="table-body" ${ref('rowContainer')} style="height: ${x => x.rowContainerHeight}px">
                ${repeat(x => x.visibleItems, html<VirtualItem<TableRow>>`
                    ${when((x, c) => (c.parent as Table).tableData[x.index].row.getIsGrouped(), html`
                        <span class="group-row-content"
                            style="
                                height: ${x => x.size}px;
                                position: absolute;
                                width: calc(100% - ${(x, c) => 16 * (c.parent as Table).tableData[x.index].row.depth}px);
                                margin-top: ${x => x.start}px;
                                padding-left: ${(x, c) => 16 * (c.parent as Table).tableData[x.index].row.depth}px;
                                ">
                            <nimble-button
                                appearance="ghost"
                                content-hidden
                                @click=${(x, c) => (c.parent as Table).tableData[x.index].row.toggleExpanded()}>
                                ${when((x, c) => (c.parent as Table).tableData[x.index].row.getIsExpanded(), html`
                                    <nimble-icon-arrow-expander-down slot="start"></nimble-icon-arrow-expander-down>
                                `)}
                                ${when((x, c) => !(c.parent as Table).tableData[x.index].row.getIsExpanded(), html`
                                    <nimble-icon-arrow-expander-right slot="start"></nimble-icon-arrow-expander-right>
                                `)}
                                Expand/Collapse
                            </nimble-button>
                            <!-- TODO: 'subrows' doesn't correctly account for sub groups. -->
                            <span class="group-text">
                                ${(x, c) => (c.parent as Table).tableData[x.index].row.groupingValue} (${(x, c) => (c.parent as Table).tableData[x.index].row.subRows.length})
                            </span>
                        </span>
                    `)}
                    ${when((x, c) => !(c.parent as Table).tableData[x.index].row.getIsGrouped(), html`
                        <span class="group-row-content"
                                style="
                                    height: ${x => x.size}px;
                                    position: absolute;
                                    width: calc(100% - ${(x, c) => 16 * (c.parent as Table).tableData[x.index].row.depth}px);
                                    margin-top: ${x => x.start}px;
                                    padding-left: ${(x, c) => 16 * (c.parent as Table).tableData[x.index].row.depth}px;
                                    ">
                            ${when((x, c) => (c.parent as Table).tableData[x.index].row.getCanExpand(), html`
                                <nimble-button
                                    appearance="ghost"
                                    content-hidden
                                    @click=${(x, c) => (c.parent as Table).tableData[x.index].row.toggleExpanded()}>
                                    ${when((x, c) => (c.parent as Table).tableData[x.index].row.getIsExpanded(), html`
                                        <nimble-icon-arrow-expander-down slot="start"></nimble-icon-arrow-expander-down>
                                    `)}
                                    ${when((x, c) => !(c.parent as Table).tableData[x.index].row.getIsExpanded(), html`
                                        <nimble-icon-arrow-expander-right slot="start"></nimble-icon-arrow-expander-right>
                                    `)}
                                    Expand/Collapse
                                </nimble-button>
                            `)}
                            <${context.tagFor(TableRow)} :rowData="${(x, c) => (c.parent as Table).tableData[x.index]}">
                                <!-- <slot name="actionMenu" slot="rowActionMenu"></slot> -->
                            </${context.tagFor(TableRow)}>
                        </span>
                    `)}
                `)}
            </div>
        </div>
    </div>
</template>
`;
