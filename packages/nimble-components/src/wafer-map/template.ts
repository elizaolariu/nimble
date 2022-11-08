import { html, when } from '@microsoft/fast-element';
import type { WaferMap } from '.';

export const template = html<WaferMap>`
            ${when(
        x => x,
        html<WaferMap>`
        `
    )}
`;
