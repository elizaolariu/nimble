import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
    applicationBackgroundColor,
    bodyFont,
    bodyFontColor,
    borderWidth,
    popupBorderColor,
    popupBoxShadowColor,
    standardPadding,
    titlePlus1Font,
    drawerWidth
} from '../theme-provider/design-tokens';

export const styles = css`
    ${display('block')}

    :host {
        position: absolute;
        top: 0;
        bottom: 0;
        width: fit-content;
        height: 100%;
        outline: none;
        font: ${bodyFont};
        color: ${bodyFontColor};
    }

    :host([location='left']) {
        left: 0px;
    }

    :host([location='right']) {
        right: 0px;
    }

    ${/* Note: overlay is only present in the DOM when modal=true */ ''}
    dialog::backdrop {
        background: ${popupBorderColor};
    }

    dialog {
        position: relative;
        top: 0px;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 0px;
        border-width: 0px;
        width: ${drawerWidth};
        height: 100%;
        background-color: ${applicationBackgroundColor};
    }

    dialog:not([open]) {
        display: none;
    }

    :host(.hidden) dialog {
        visibility: hidden;
    }

    :host([location='left']) dialog {
        left: 0px;
        border-right: ${borderWidth} solid ${popupBoxShadowColor};
    }

    :host([location='right']) dialog {
        right: 0px;
        border-left: ${borderWidth} solid ${popupBoxShadowColor};
    }

    ${
        /*
            Styling for a 3-panel drawer with header, footer, and a content
            region filling the remaining space/height
        */ ''
    }

    ::slotted(header) {
        padding: ${standardPadding};
        flex: none;
        font: ${titlePlus1Font};
    }

    ::slotted(section) {
        padding: ${standardPadding};
        flex: auto;
        overflow-y: auto;
    }

    ::slotted(footer) {
        padding: ${standardPadding};
        flex: none;
        display: flex;
        justify-content: flex-end;
        border-top: ${borderWidth} solid ${popupBorderColor};
    }
`;
