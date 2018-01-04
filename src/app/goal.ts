export class Goal {
	public showDescription:boolean;
	constructor(public id:number, public name:string, public description:string, public completeData:Date){
		this.showDescription =  false
	}

}
