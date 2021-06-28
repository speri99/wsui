import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getMentorProfileUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MentorserviceService {

  constructor(private httpClient:HttpClient) {
   }

   getMentorProfile():Observable<any>
   {
     const postData={
       id:localStorage.getItem("userId")
     }
     return this.httpClient.post(getMentorProfileUrl,postData);
   }
}
