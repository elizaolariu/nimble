import { WaferMapRenderingOptions } from './WaferMapRenderingOptions';

/**
 * WafermapRenderingObject
 */
export class WaferMapRenderingObject {
    // dice: WafermapDie[];
    // metadata: WafermapMetadata = new WafermapMetadata();
    // jobId: string;
    public renderingOptions: WaferMapRenderingOptions;
    // waferDataType: WafermapDataType;
    // colorsScale: string[] = null;

    public constructor() {
        this.renderingOptions = new WaferMapRenderingOptions();
    }

    // get isEmpty(): boolean { return !this.dice || !(this.dice.length > 0); }
}
