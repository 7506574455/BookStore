import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BookService} from 'src/app/services/book.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

comment:any
bookStoreArray:any
value: any;
id:any;
bookdata: any;

  constructor(private router: Router,private bookService:BookService,private dataService:DataService,private matSnackBar:MatSnackBar) { 
    this.bookdata = this.router.getCurrentNavigation()?.extras.state
    console.log(this.bookdata)
  }

  ngOnInit(): void {
    this.getFeedback()
    this.dataService.receiveData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getFeedback();
      })
  }


  feedback(){
    try{
      let data={
        comment : this.comment,
        rating : this.value
      }
  
      this.id = this.bookdata.id;
      this.bookService.FeedbackService(data,this.id).subscribe(
        (response: any) => {
          console.log('reviewID',response);
            this.dataService.sendData(response);
          this.matSnackBar.open("Feedback added Successfully", '', { duration: 2000,});
  
        },
        
        (error: any) => {console.log(error);
        });
    }
    catch(Error:any){
        console.log(Error.Message)
    }
    }



    getFeedback(){
      try{
        this.bookService.GetFeedbackService(this.bookdata.id).subscribe(
          (response: any) => { 
              console.log(response.result)
            this.bookStoreArray=response['result'];
           console.log("getBooksArray",this.bookStoreArray);
            this.bookStoreArray.reverse()
          })
      }
      catch(Error:any){
        console.log(Error.Message)
      }
    }

}
