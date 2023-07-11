export class Photo{
    id:string;
    photoLink:string;
    description:string;

    constructor(model?: Partial<Photo>){
       if(!model || !(model instanceof Object)){
       model=<Photo><any>{};
       }

        this.id=model.id || 'id';
        this.photoLink=model.photoLink || 'link';
        this.description=model.description  || 'description';
    }
  
}