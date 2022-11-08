import {
    DesignSystem,
    FoundationElement
} from '@microsoft/fast-foundation';
import { template } from '../theme-provider/template';
import type { WaferMapRenderingObject } from './data-types/WaferMapRenderingObject';
import { styles } from './styles';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-wafer-map': WaferMap;
    }
}

/**
 * A nimble-styled WaferMap
 */
export class WaferMap extends FoundationElement {
    public waferData: WaferMapRenderingObject | undefined;
    // colorBy: WaferColorByOptions = 0;
    // containerSize: WidgetItemSize = "big";
    // highlightedValues!: string[];
    // colorsScale: WafermapColorsScale | undefined;
}

const nimbleWaferMap = WaferMap.compose({
    baseName: 'wafer-map',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleWaferMap());
