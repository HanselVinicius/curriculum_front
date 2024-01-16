export default class ExperienceVO{

    public readonly company:string;
    public readonly role:string;
    public readonly description:string;
    public readonly startDate:Date;
    public readonly endDate:Date;


    constructor(company:string, role:string, description:string, startDate:Date, endDate:Date){
        this.company = company;
        this.role = role;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    



}