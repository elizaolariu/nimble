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
import { Theme } from '../theme-provider/types';
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

    :host([location='left']) dialog[open] {
        transform: translate(-100%);
        transition: transform ${largeDelay} ease-in;
    }

    :host([location='left']) dialog[open].open {
        transform: translate(0%);
    }

    :host([location='right']) {
        right: 0px;
    }

    :host([location='right']) dialog[open] {
        width: 0px;
        transition: width ${largeDelay} ease-in;
    }

    :host([location='right']) dialog[open].open {
        width: ${drawerWidth};
    }

    dialog[open] {
        width: ${drawerWidth};
        z-index: 9999;
        position: relative;
        top: 0px;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        border-radius: 0px;
        border-width: 0px;
        height: 100%;
        background-color: ${applicationBackgroundColor};
        margin: 0px;
        padding: 0px;
        max-width: none;
        max-height: none;
        overflow-x: hidden;
    }

    dialog[open].animation-complete {
        overflow-x: auto;
    }

    .dialog-contents {
        width: ${drawerWidth};
    }

    dialog.animation-complete .dialog-contents {
        width: 100%;
    }

    dialog[open]::backdrop {
        opacity:0;
        transition: opacity 0.25s ease-in;
    }

    dialog[open].open::backdrop {
        opacity: 1;
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
            /*
                Local Theme Behaviors to style the backdrop because it is not a decendent of the theme provider. As a result,
                the backdrop cannot be styled using tokens directly. Note: The backdrop is only visible when modal = true.
            */
            themeBehavior(
                Theme.light,
                css`
                dialog::backdrop {
                    background: ${hexToRgbaCssColor(Black91, 0.3)};
                }
            `
            ),
            themeBehavior(
                Theme.dark,
                css`
                dialog::backdrop {
                    background: ${hexToRgbaCssColor(Black15, 0.3)};
                }
            `
            ),
            themeBehavior(
                Theme.color,
                css`
                dialog::backdrop {
                    background: ${hexToRgbaCssColor(White, 0.3)};
                }
            `
            )
        );
