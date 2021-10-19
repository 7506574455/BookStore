import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from '../../services/book.service';
import {DataService} from '../../services/data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  displayAddress = true;
  displayButton = true;
  displayCart = true;
  displayContinueButton = true;
  

  panelOpenState = false;
  cartsArray:any=[]
  cart:any
  token:any
 // displayAddress = true;
  //displayButton = true;
  quantity: number = 1;
  addressDetails: any
  address: any
  addressForm!: FormGroup;
  //type:any=['Home','work','other'];

  constructor(private bookService:BookService,private router:Router,private snackBar:MatSnackBar, private dataService:DataService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.addressForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required,Validators.minLength(10)]],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required], 
      addressType: ['', Validators.required],
    })

 
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

  i = 1
  increment(data: { product_id: { quantity: any; }; }) {
    if (this.i != data.product_id.quantity) {
      this.i++;
      this.quantity = this.i;
      console.log(data.product_id.quantity);
    }
  }
  decrement() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
      console.log(this.quantity);
    }
  }

  addressToggles(){
    this.displayAddress = false
    this.displayButton = false
  }

  continue(){
    this.displayCart = false
    this.displayContinueButton = false
  }


  onSubmit() {
    console.log("onsubmit function calling", this.addressForm.value);
    let data={
      
        addressType: this.addressForm.value.addressType,
        fullAddress: this.addressForm.value.fullAddress,
        city: this.addressForm.value.city,
        state: this.addressForm.value.state,
        service:"advance"
      }

      console.log(data);
      this.bookService.addressDetailsService(data).subscribe((response:any)=>{
        console.log(response);
        this.snackBar.open("Details added successfully ", ' ', {
          duration: 1000,
      });
    }, (error: any) => {
      console.log(error); 
      this.snackBar.open("Details failed ", ' ', {
        duration: 1000,   
    }) ;

  })

  } 

  checkout(){
    this.cart = this.cart;
    let orders: Array<any> =[]
    for (this.cart of this.cartsArray){
    
      let order = {
        "product_id": this.cart.product_id._id,
        "product_name": this.cart.product_id.bookName,
        "product_quantity": this.cart.product_id.quantity,
        "product_price": this.cart.product_id.price,
      }
      orders.push(order)
    }  
    let OrderDetails={
      orders: orders
    }
    console.log(OrderDetails)
    this.bookService.orderService(OrderDetails).subscribe((response:any)=>{
      console.log(response)
      this.router.navigate(['orderplaced']);
      this.snackBar.open("Order added successfully ", ' ', {
        duration: 1000,
    });
    },
    (error:any) => {
      console.log(error);
      this.snackBar.open("Order failed ", ' ', {
        duration: 1000,   
    }) ;
    });
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
  
  


function result(result: any) {
  throw new Error('Function not implemented.');
}

