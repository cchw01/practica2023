export class Ingredient {
    id!: number;
    name!: string;
    stoc!: number;
    isAlergen!: boolean;

    public constructor(init?: Partial<Ingredient>) {
        Object.assign(this, init);
    }
}
