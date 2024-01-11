import { Injectable } from '@angular/core';
import { CurriculumApiClient } from '../../infra/client/CurriculumApiClient';
import { AxiosInstance } from 'axios';
import User from 'src/app/model/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static LOGIN_ROUTE = '/v1/auth/login';

  private client:AxiosInstance;
  constructor(curriculumClient:CurriculumApiClient,private cookieService:CookieService) {
    this.client = curriculumClient.getClient();
   }


  public login(user:User,successCallback:Function,errorCallback:Function){
    this.client.post(AuthService.LOGIN_ROUTE,user).then((response)=>{
      if(response.status > 299){
        errorCallback(null);
        return;
      }
      this.setLogged(response.data);
      successCallback();
    }).catch((error)=>{
      errorCallback(error);
    });
  }

  private setLogged(user:User){
    this.cookieService.set('USER',JSON.stringify(user), {
      expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    });
  }

  public isLogged(): boolean{
    return this.cookieService.check('USER');
  }

}
