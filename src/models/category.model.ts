export class Category {

	ID!: string;
	Name!: string;
   
	constructor(category?: Partial<Category>) {

		if (!category || !(category instanceof Object)) {
		    category = <Category><any>{};
		}
	
		this.ID = category.ID || "";
		this.Name = category.Name || "";
	}
}