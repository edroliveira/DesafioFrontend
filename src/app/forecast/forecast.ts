export class Forecast{
    id: number;
    date: string;
    description: string;
    condition: string;
    constructor(id: number, date: string, description: string, condition: string){
    this.id = id;
    this.date = date;
    this.description = description;
    this.condition = condition;
    }
    }