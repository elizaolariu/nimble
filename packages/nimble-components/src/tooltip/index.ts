import { attr } from '@microsoft/fast-element';
import {
    DesignSystem,
    Tooltip as FoundationTooltip
} from '@microsoft/fast-foundation';
import { styles } from './styles';
import { template } from './template';
import type { TooltipAppearance } from './types';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-tooltip': Tooltip;
    }
}

/**
 * A nimble-styled tooltip control.
 */
export class Tooltip extends FoundationTooltip {
    /**
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    @attr
    public appearance: TooltipAppearance;

    @attr({ attribute: 'icon-visible', mode: 'boolean' })
    public iconVisible = false;
}

const nimbleTooltip = Tooltip.compose({
    baseName: 'tooltip',
    baseClass: FoundationTooltip,
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleTooltip());
