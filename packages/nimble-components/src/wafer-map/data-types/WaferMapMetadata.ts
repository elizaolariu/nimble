import type { Orientation, Quadrant } from '../types';

/**
 * WaferMapMetadata
 */
export class WaferMapMetadata {
    public axisLocation!: Quadrant;
    public notchOrientation!: Orientation;
    public cols!: number;
    public rows!: number;
    public valueField!: string;
    public valueFieldDisplayName!: string;
    public origin!: { x: number, y: number };
    public yield!: number;
    public totalWafers!: number;
    public zAxisWafersNumber!: number;
    public filterValues = {};
}
