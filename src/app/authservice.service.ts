import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {loginUrl,signupUrl} from "./constants"

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  

  constructor(private httpClient:HttpClient) { }

  authenticate(user:any):Observable<any>
  {
    return this.httpClient.post(loginUrl,user)
  }

  registerUser(user:any):Observable<any>
  {
    return this.httpClient.post(signupUrl,user)
  }

}
