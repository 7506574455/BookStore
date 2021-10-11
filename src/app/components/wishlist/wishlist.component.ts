import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from '../../services/book.service';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListArray: any=[];
  

  constructor(private bookService:BookService,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  
     this.getwishList()
     this.dataService.receiveData.subscribe((response:any)=>{
         console.log(response);
         this.getwishList();
      })
     
  }
 

   getwishList(){
     console.log("getwishList");
     this.bookService.getWishlistService().subscribe((response:any)=>{
       this.wishListArray=response['result']
       console.log("Get wishList data ", this.wishListArray);
      
     },error=>(
       console.log("getwishList", error)
     ))
   
   }

  DeleteWish(data:any){
    console.log("DeleteWish");
  this.bookService.deleteWishlistService(data).subscribe((response:any)=>{
    this.wishListArray=response['result']
    this.dataService.sendData(response);
  },error=>(
    console.log("DeleteWish",error)
  ))
  }
  

   homepage(){
     this.router.navigate(['bookdashboard']);
   }
  
}
