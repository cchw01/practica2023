export class Table{
    _id!: string;
    numberOfPlaces: number;
    location: string;

    constructor(model?: Partial<Table>){
        if (!model || !(model instanceof Object)){
            model = <Table>(<any>{});
        }

        this.numberOfPlaces = model.numberOfPlaces || -1;
        this.location = model.location || "";
    }
}