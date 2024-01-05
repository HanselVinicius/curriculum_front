import { Injectable } from '@angular/core';
import { CurriculumApiClient } from '../CurriculumApiClient';
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


  public login(user:User,successCallback:Function){
    this.client.post('/login',user).then((response)=>{
      if(response.status === 200){
        successCallback();
      }
    }).catch((error)=>{
      console.log(error);
    });
  }

}
