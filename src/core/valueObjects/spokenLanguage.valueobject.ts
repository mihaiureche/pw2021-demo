export interface ISpokenLanguage {
    readonly iso: string;
    readonly name: string;
}

export class SpokenLanguage implements ISpokenLanguage {
    public readonly iso: string;
    public readonly name: string;

    constructor(iso: string, name: string) {
        this.iso = iso;
        this.name = name;
    }
}