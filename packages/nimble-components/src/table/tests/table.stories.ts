import { html } from '@microsoft/fast-element';
import type { Meta, StoryObj } from '@storybook/html';
import { createRenderer } from '../../utilities/tests/storybook';
import '..';
import 'regular-table/dist/css/material.css';

const overviewText = 'Table!!!!';

const metadata: Meta = {
    title: 'Table',
    parameters: {
        docs: {
            description: {
                component: overviewText
            }
        }
    },
    // prettier-ignore
    render: createRenderer(html`
        <nimble-table>
        </nimble-table>
    `)
};

export default metadata;

export const table: StoryObj = {};
