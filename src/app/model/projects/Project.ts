import TecnologiaVo from "./TecnologiaVo";

export default interface Project {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly link:string;
    readonly technologies: TecnologiaVo[];
}