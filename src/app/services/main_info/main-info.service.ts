import { Injectable } from '@angular/core';
import { CurriculumApiClient } from 'src/app/infra/client/CurriculumApiClient';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService {

  private static MAIN_INFO_ROUTE = '/v1/main-info';

  constructor(private curriculumClient:CurriculumApiClient) { }

  public getMainInfo(page:number,size:number): Promise<any>{
    return this.curriculumClient.getClient().get(MainInfoService.MAIN_INFO_ROUTE,
      {params:{page:page,size:size}});
  }
  

}
