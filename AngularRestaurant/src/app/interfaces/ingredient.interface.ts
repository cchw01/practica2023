export class Ingredient {
    _id!: string;
    name!: string;
    stoc!: number;
    isAlergen!: boolean;

    public constructor(init?: Partial<Ingredient>) {
        Object.assign(this, init);
    }
}
