import ExperienceVO from "./ExperienceVo";

export default interface MainInfoVO {
    id: number;
    name: string;
    surname: string;
    description: string;
    experiences: ExperienceVO[];
}