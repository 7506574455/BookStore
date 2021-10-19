import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  BaseUrl=environment.BaseUrl;

  constructor( private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }
    loginUser(requestdata:any){
      let httpAuthOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
         'Authorization': this.token
        })
      };
      console.log(requestdata);
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/login',requestdata,false,httpAuthOptions)
    }

    signupUser(requestdata:any){
      let httpAuthOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
         'Authorization': this.token
        })
      };
      console.log(requestdata);
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/registration',requestdata,false,httpAuthOptions)
    }

    loginadmin(requestdata:any){
      let httpAuthOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
         'Authorization': this.token
        })
      };
      console.log(requestdata);
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/admin/login',requestdata,false,httpAuthOptions)
    }

    signupadmin(requestdata:any){
      let httpAuthOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
         'Authorization': this.token
        })
      };
      console.log(requestdata);
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/admin/registration',requestdata,false,httpAuthOptions)
    }

    
  
}
