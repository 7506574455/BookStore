import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  booksArray:any
  token: any
  panelOpenState = false;
  books: Array<any> =[]; 
  id:any
  
  constructor(private bookService:BookService,private dataService:DataService,private router:Router) { }
  
  
  ngOnInit(): void {
    this.getAllBooks();
 
  }
  
  
  getAllBooks(){
    this.bookService.getallBookService().subscribe((response: any) => {
      console.log(response); 

      this.booksArray = response['result'] 
      console.log("Books are", this.booksArray);

    }, error => {
      console.log(error);

    })
  }

  bookDetailsPage(data:any){
    this.id = data._id;
    console.log("book-id" ,this.id);
    this.router.navigateByUrl('dashboard/bookpage' , { state: { details: data,id: data._id } })
   
  }

getRating(){
  const rate = Math.max((Math.random() * 4) + 1);
  return rate.toFixed(1);
}

cart(data:any){
    console.log("cart data",data);
   this.bookService.addCartService(data).subscribe((response: any) => {
     console.log(response);
    },error =>{
      console.log(error);
      
    })
  
  }

  
  wishlist(data:any) { 
    console.log("wishlist data",data);  
    this.bookService.addwishListService(data).subscribe((response: any) => {
      console.log(response);

    },error =>{
      console.log(error);
      
    })
  }

  // details(data:any){
  //   this.id=data.id;
  //console.log("book-Id ->",this.id);

  // }


}
