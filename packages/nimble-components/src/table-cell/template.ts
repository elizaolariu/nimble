import { html, ViewTemplate } from '@microsoft/fast-element';
import type { FoundationElementTemplate } from '@microsoft/fast-foundation';
import type { TableCell } from '.';
import { Button } from '../button';

export const template = html<TableCell>`
  <template
      tabindex="-1"
      role="gridcell"
  >
    <slot></slot>
  </template>
`;