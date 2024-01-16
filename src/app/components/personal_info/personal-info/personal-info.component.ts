import { Component, OnInit } from '@angular/core';
import ExperienceVO from 'src/app/model/main_info/ExperienceVo';
import { MainInfoService } from 'src/app/services/main_info/main-info.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  public description:string = "";
  
  private experiences:ExperienceVO[] = [];

  constructor(private mainInfoService:MainInfoService) { }

  ngOnInit(): void {
      this.makeRequest();  
  }

  private makeRequest(){
    this.mainInfoService.getMainInfo(0,1).then((response)=>{
      this.description = response.data.content[0].description;
      this.experiences = response.data.content[0].experienceVOS;
    }); 
  }

  public concatenateResponse(): string {
    let concatenatedExperiences = this.experiences.map((experience) => {
      return (
        "<b> Nome da empresa: </b>" + experience.company +
        "<br> <b> Cargo: </b>" + experience.role +
        "<br> <b> Descrição: </b> " + experience.description +
        "<br> <b> Data de Início: </b> " + experience.startDate +
        "<br> <b> Data de Saída: </b> " + experience.endDate
      );
    });
  
    return concatenatedExperiences.join("<br>");
  }


}
