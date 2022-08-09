import { html, ref } from '@microsoft/fast-element';
import type { Drawer } from '.';

// mkreis TODO: ariaLabel

// prettier-ignore
export const template = html<Drawer>`
    <dialog
        aria-modal="${x => x.modal}"
        aria-describedby="${x => x.ariaDescribedby}"
        aria-labelledby="${x => x.ariaLabelledby}"
        ${ref('dialog')}
        @close="${(x, c) => x.closeHandler(c.event)}"
    >
        <slot></slot>
    </dialog>
`;
