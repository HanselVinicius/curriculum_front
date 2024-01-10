import { Injectable } from '@angular/core';
import { CurriculumApiClient } from '../../infra/client/CurriculumApiClient';
import { AxiosInstance } from 'axios';
import User from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private client:AxiosInstance;
  constructor(curriculumClient:CurriculumApiClient) {
    this.client = curriculumClient.getClient();
   }


  public login(user:User,successCallback:Function,errorCallback:Function){
    this.client.post('/v1/auth/login',user).then((response)=>{
      if(response.status === 200){
        successCallback();
      }
    }).catch((error)=>{
      errorCallback();
      console.log(error);
    });
  }

}
