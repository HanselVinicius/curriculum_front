export default class TecnologiaVo{
    public readonly id:number;
    public readonly name:string;
    public readonly experienceYears:number;


    constructor(id:number, name:string, experienceYears:number){
        this.id = id;
        this.name = name;
        this.experienceYears = experienceYears;
    }
}