import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { Black15, Black91, White } from '@ni/nimble-tokens/dist/styledictionary/js/tokens';
import {
    applicationBackgroundColor,
    bodyFont,
    bodyFontColor,
    borderWidth,
    popupBorderColor,
    popupBoxShadowColor,
    standardPadding,
    titlePlus1Font,
    drawerWidth,
    largeDelay
} from '../theme-provider/design-tokens';
import { hexToRgbaCssColor } from '../utilities/style/colors';
import { themeBehavior } from '../utilities/style/theme';

export const styles = css`
    ${display('block')}

    :host {
        position: absolute;
        top: 0;
        bottom: 0;
        width: ${drawerWidth};
        height: 100%;
        outline: none;
        font: ${bodyFont};
        color: ${bodyFontColor};
    }

    :host([location='left']) {
        left: 0px;
    }
    
    :host([location='left']) dialog:not([open]) {
        transform: translate(-100%);
    }

    :host([location='right']) {
        right: 0px;
    }
    
    :host([location='right']) dialog:not([open]) {
        transform: translate(100%);
    }

    ${/* Note: overlay is only present in the DOM when modal=true */ ''}
    ::backdrop {
        background: ${popupBorderColor};
    }

    dialog {
        visibility: hidden;
        z-index: 9999;
        animation: transform 5s ease-in;
    }

    dialog[open] {
        visibility: visible;
        width: ${drawerWidth};
        transform: translate(0%);
        position: relative;
        top: 0px;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 0px;
        border-width: 0px;
        height: 100%;
        background-color: ${applicationBackgroundColor};
        margin: 0px;
        padding: 0px;
        max-width: none;
        max-height: none;
    }

    :host(.hidden) dialog {
        visibility: hidden;
    }

    :host([location='left']) dialog {
        left: 0px;
        right: auto;
        border-right: ${borderWidth} solid ${popupBoxShadowColor};
    }

    :host([location='right']) dialog {
        left: auto;
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
`.withBehaviors(
    /* Local Theme Behaviors to style the backdrop because it is not a decendent of the theme provider */
        themeBehavior(
        // Light Theme
            css`
            dialog::backdrop {
                background: ${hexToRgbaCssColor(Black91, 0.3)};
            }
        `,
            // Dark Theme
            css`
            dialog::backdrop {
                background: ${hexToRgbaCssColor(Black15, 0.3)};
            }
        `,
            // Color Theme
            css`
            dialog::backdrop {
                background: ${hexToRgbaCssColor(White, 0.3)};
            }
        `
        )
    );

