/* eslint-disable max-classes-per-file */
// TODO: the Resize Observer related files are a temporary stopgap measure until
// Resize Observer types are pulled into TypeScript, which seems imminent
// At that point these files should be deleted.
// https://github.com/microsoft/TypeScript/issues/37861

/** @internal */
export interface ContentRect {
    height: number;
    left: number;
    top: number;
    width: number;
}

/** @internal */
export declare const contentRect: (target: Element) => Readonly<ContentRect>;

// eslint-disable-next-line jsdoc/require-description
/** @internal */
export declare class ResizeObserverEntry {
    public readonly target: Element;
    public readonly contentRect: ContentRect;
    public constructor(target: Element);
}

// eslint-disable-next-line jsdoc/require-description
/** @internal */
export declare class ResizeObserverClassDefinition {
    public constructor(callback: ResizeObserverCallback);
    public observe(target: Element): void;
    public unobserve(target: Element): void;
    public disconnect(): void;
}

/** @internal */
export declare type ResizeObserverCallback = (
    entries: ResizeObserverEntry[],
    observer: ResizeObserverClassDefinition
) => void;

/** @internal */
export type ConstructibleResizeObserver = new (
    callback: ResizeObserverCallback
) => ResizeObserverClassDefinition;

declare global {
    interface WindowWithResizeObserver extends Window {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ResizeObserver: ConstructibleResizeObserver;
    }
}
