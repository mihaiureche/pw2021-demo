export interface IProductionCountry {
    readonly iso: string;
    readonly name: string;
}

export class ProductionCountry implements IProductionCountry {
    public readonly iso: string;
    public readonly name: string;

    constructor(iso: string, name: string) {
        this.iso = iso;
        this.name = name;
    }
}