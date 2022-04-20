import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
    bodyFont,
    bodyFontColor,
    fillHoverSelectedColor
} from '../theme-provider/design-tokens';

export const styles = css`
    ${display('flex')}

    :host {
        align-items: center;
        box-sizing: border-box;
        font: ${bodyFont};
        color: ${bodyFontColor};
        margin-top: 20px;
        width: 400px;
        height: 300px;
    }

    .container {
        display: flex;
    }

    regular-table {
        position: relative;
        width: 100%;
        height: 100%;
    }

    regular-table thead tr:last-child th {
        border-bottom: 1px solid #ddd;
    }

    regular-table table * {
        box-sizing: border-box;
    }

    regular-table th {
        position: relative;
        text-align: center;
    }
    
    regular-table td, regular-table th {
        white-space: nowrap;
        font-size: 12px;
        padding: 0 5px;
        height: 19px;
    }

    regular-table .rt-column-resize {
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        cursor: col-resize;
    }

    regular-table td.row-selected {
        background: ${fillHoverSelectedColor};
    }
`;
