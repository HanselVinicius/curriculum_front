export default class ExperienceVO{

    private company:string;
    private role:string;
    private description:string;
    private startDate:Date;
    private endDate:Date;


    constructor(company:string, role:string, description:string, startDate:Date, endDate:Date){
        this.company = company;
        this.role = role;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}