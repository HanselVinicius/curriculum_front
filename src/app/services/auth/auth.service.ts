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


  public login(user:User){

  }

}
