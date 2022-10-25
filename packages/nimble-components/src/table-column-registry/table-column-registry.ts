import type { IColumnProvider } from './column-provider';

/**
 * A class for registering custom column content providers for a Table
 */
export class TableColumnProviderRegistry {
    private readonly currentProviders: IColumnProvider[] = [];

    public addProvider(provider: IColumnProvider): void {
        this.currentProviders.push(provider);
    }
}