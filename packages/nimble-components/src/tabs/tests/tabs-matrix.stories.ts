import type { Meta, Story } from '@storybook/html';
import { withXD } from 'storybook-addon-xd-designs';
import { html, repeat, when } from '@microsoft/fast-element';
import { createRenderer } from '../../utilities/tests/storybook';
import {
    DisabledStateName,
    DisabledState,
    disabledStates,
    createMatrix,
    themeWrapper
} from '../../utilities/tests/matrix';
import '../index';
import '../../tab';
import '../../tab-panel';
import '../../tabs-toolbar';
import '../../button';

type TabsToolbarStateName = 'toolbar';
type TabsToolbarState = boolean;
const tabsToolbarStates: TabsToolbarState[] = [false, true];

interface MatrixType {
    disabled: DisabledState;
    toolbar: TabsToolbarState;
}

const matrix = createMatrix<TabsToolbarStateName, TabsToolbarState, DisabledStateName, DisabledState>({ disabled: disabledStates, toolbar: tabsToolbarStates });

const metadata: Meta = {
    title: 'Tests/Tabs',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl:
                'https://xd.adobe.com/view/8ce280ab-1559-4961-945c-182955c7780b-d9b1/screen/b2aa2c0c-03b7-4571-8e0d-de88baf0814b/specs'
        },
        controls: { hideNoControlsWarning: true }
    },
    render: createRenderer(themeWrapper(html`
        ${repeat(() => matrix, html<MatrixType>`
            <nimble-tabs style="padding: 15px;">
                ${when(x => x.toolbar, html`
                    <nimble-tabs-toolbar>
                        <nimble-button appearance="ghost">Toolbar Button</nimble-button>
                    </nimble-tabs-toolbar>
                `)}
                <nimble-tab>Tab One</nimble-tab>
                <nimble-tab ?disabled="${x => x.disabled.value}">
                    Tab Two ${x => x.disabled.name}
                </nimble-tab>
                <nimble-tab-panel>Tab content one</nimble-tab-panel>
                <nimble-tab-panel>Tab content two</nimble-tab-panel>
            </nimble-tabs>
        `)}     
    `))
};

export default metadata;

export const tabsThemeMatrix: Story = {};
