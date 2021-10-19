import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService, } from '../services/http.service';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  BaseUrl = environment.BaseUrl
  token:any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token') }

  getallBookService(){
    let httpAuthOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get/book',false,httpAuthOptions)
  }

  addCartService(data:any){
  console.log("Cart data",data);
       let httpAuthOptions={
         headers:new HttpHeaders({
           'Content-Type':'application/json',
           'x-access-token':this.token
  
         })
       }
       return this.httpService.PostService(this.BaseUrl +'/bookstore_user/add_cart_item/'+ data._id, {},true,httpAuthOptions);
     }
  
     getCartService() {
        this.token = localStorage.getItem('token');
       let httpAuthOptions = {
       headers: new HttpHeaders({
         'x-access-token': this.token,
          'Content-Type': 'application/json'
         })
        }
      return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_cart_items',true, httpAuthOptions);
       }
    
       addwishListService(data: any) {
        this.token = localStorage.getItem('token');
        let httpAuthOptions = {
          headers: new HttpHeaders({
            'x-access-token': this.token,
            'Content-Type': 'application/json'
          })
        }
        return this.httpService.PostService(this.BaseUrl+'/bookstore_user/add_wish_list/'+data._id,{},true, httpAuthOptions);
      }
 
 
   getWishlistService() {
     this.token = localStorage.getItem('token');
     let httpAuthOptions = {
       headers: new HttpHeaders({
         'x-access-token': this.token,
         'Content-Type': 'application/json'
       })
     }
     return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_wishlist_items',true, httpAuthOptions);
   }

   deleteWishlistService(data:any) {
     this.token = localStorage.getItem('token');
     let httpAuthOptions = {
       headers: new HttpHeaders({
         'x-access-token': this.token,
         'Content-Type': 'application/json'
       })
     }
     return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_wishlist_item/'+data.product_id._id,{},true, httpAuthOptions);
   }

 

   removeCartService(data:any) {
     this.token = localStorage.getItem('token');
     console.log('token')
    let httpAuthOptions = {
       headers: new HttpHeaders({
         'x-access-token': this.token,
         'Content-Type': 'application/json'
       })
     }
     return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_cart_item/'+data._id,{},true, httpAuthOptions);
   }
  
  
   addressDetailsService(data:any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.putService(this.BaseUrl+'/bookstore_user/edit_user',data,true, httpAuthOptions);
  }

  orderService(data:any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.PostService(this.BaseUrl+'/bookstore_user/add/order',data,true, httpAuthOptions);
  }
 
 
  
}
