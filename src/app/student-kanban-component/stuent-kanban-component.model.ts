export class TaskCard {
    public column: number;
    public text: string;
    public cardId = 0;
    constructor(column: number = 1,text: string){
        this.column = column;
        this.text = text;
        this.cardId++;
    }
}