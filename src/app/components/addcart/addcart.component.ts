import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from '../../services/book.service';
import {DataService} from '../../services/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  panelOpenState = false;
  cartsArray:any=[]
  contactForm!: FormGroup;

  constructor(private bookService:BookService,private router:Router, private formBuilder: FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {

    

     this.getcarts()
     this.dataService.receiveData.subscribe((response:any)=>{
     console.log(response);
     this.getcarts();
     })

  }

  

   getcarts(){
    console.log("getcartlist");
     this.bookService.getCartService().subscribe((response:any)=>{
     this.cartsArray=response['result']
    console.log("Get cart data", this.cartsArray);
      
   },error=>(
     console.log("getcartlist", error)
    ))
   
   }



   removeCartlist(data:any){
    console.log("removecartlist");
  this.bookService.removeCartService(data).subscribe((response:any)=>{
    this.cartsArray=response['result']
    this.dataService.sendData(response);
  },error=>(
    console.log("removecartlist",error)
  ))
  }

  homepage(){
    this.router.navigate(['bookdashboard']);
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
  
  


