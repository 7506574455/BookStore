import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from 'src/app/services/book.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.scss']
})
export class BookpageComponent implements OnInit {
  token:any;
  id:any;
  bookdata:any
  booksArray:any
  
  constructor(private router: Router,private bookService:BookService,private dataService:DataService) { 
     this.bookdata = this.router.getCurrentNavigation()?.extras.state;
     console.log(this.bookdata)
  }

  ngOnInit(): void {
      
    this.getData()
  }
  getData = () => {
    try{
    this.bookdata= this.bookdata['details'];
    localStorage.setItem("id",this.bookdata.id);
    console.log(this.bookdata);
    }
    catch(Error:any){
      console.log(Error.Message)
    }
   //this.data=this.data['value']
   }

   homepage(){
    this.router.navigate(['bookdashboard']);
  }

  
  
  getBook(){
    this.bookService.getallBookService().subscribe((response:any)=>{
      console.log(response)
      this.booksArray=response.result
      console.log(this.booksArray)
    }
    )
  }
}
