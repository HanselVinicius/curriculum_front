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
  
  public experiences:ExperienceVO[] = [];



  constructor(private mainInfoService:MainInfoService) { }

  ngOnInit(): void {
      this.makeRequest();  
  }

  public makeRequest(){
    this.mainInfoService.getMainInfo(0,1).then((response)=>{
      this.description = response.data.content[0].description;
      this.experiences = response.data.content[0].experienceVOS;
    }); 
  }




}
