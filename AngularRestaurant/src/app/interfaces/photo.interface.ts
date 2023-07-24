export class Photo {
    _id!: string;
    photoLink!: string;
    description!: string; 

    public constructor(init?: Partial<Photo>) {
        Object.assign(this, init);
    }
}