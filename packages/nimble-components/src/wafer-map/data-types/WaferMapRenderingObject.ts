import type { WaferMapDataType } from '../types';
import type { WaferMapDie } from './WaferMapDie';
import { WaferMapMetadata } from './WaferMapMetadata';
import { WaferMapRenderingOptions } from './WaferMapRenderingOptions';

/**
 * WaferMapRenderingObject
 */
export class WaferMapRenderingObject {
    public dice!: WaferMapDie[];
    public metadata: WaferMapMetadata = new WaferMapMetadata();
    public jobId!: string;
    public renderingOptions: WaferMapRenderingOptions;
    public waferDataType!: WaferMapDataType;
    public colorsScale: string[] | null = null;

    public constructor() {
        this.renderingOptions = new WaferMapRenderingOptions();
    }

    public get isEmpty(): boolean { return !this.dice || !(this.dice.length > 0); }
}
