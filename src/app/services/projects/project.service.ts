import { Injectable } from '@angular/core';
import { CurriculumApiClient } from 'src/app/infra/client/CurriculumApiClient';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private curriculumApiClient:CurriculumApiClient) { }


  public getProjects():Promise<any>{
    return this.curriculumApiClient.getClient().get("v1/projects");
  }
}
