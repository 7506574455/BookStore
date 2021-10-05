import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl
  token:any

  constructor(private http: HttpClient) { }

   
  PostService( url: string= '' , payload: any, tokenRequired:boolean=false, httpOption:any){
  
     return this.http.post(url,payload,tokenRequired && httpOption);
 
   }
}
