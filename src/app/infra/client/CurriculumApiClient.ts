import { Injectable } from "@angular/core";
import { AxiosInstance } from "axios";
import axios from "axios";

@Injectable({
	providedIn: "root"
})
export class CurriculumApiClient {
    
    private readonly _baseUrl: string = "";
    private axiosClient:AxiosInstance;
    
    constructor() {
    this.axiosClient = axios.create({
        baseURL: this._baseUrl,
        headers: {
            "Content-Type": "application/json"
        }
    });
    }


    public getClient(){
        return this.axiosClient;
    }

    public getClienWithAuth(token:string){
        this.axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return this.axiosClient;
    }
}
