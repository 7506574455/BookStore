import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from '../../services/book.service';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.scss']
})
export class BookpageComponent implements OnInit {
  @Input() books: any ;
  data: any
  token:any
  cartsArray:any=[]
  cart:any
  constructor(private router: Router,private bookService:BookService,private dataService:DataService) { 
     this.data = this.router.getCurrentNavigation()?.extras.state;
     console.log(this.data)
  }

  ngOnInit(): void {
    
    this.token = localStorage.getItem('token') 
    this.getData()
  }
  getData = () => {
   //this.data=this.data['value']
   }

   homepage(){
    this.router.navigate(['bookdashboard']);
  }

  addcart(data:any){
    console.log("cart data",data);
   this.bookService.addCartService(data).subscribe((response: any) => {
     console.log(response);
    },error =>{
      console.log(error);
      
    })
  
  }
}
