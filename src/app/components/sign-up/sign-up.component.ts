import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService:UserService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required,Validators.minLength(10)]]
  
  });
  }

  onSubmit() {
    console.log("onsubmit function calling", this.signupForm.value);
    let req={
      fullName: this.signupForm.value.fullName,
      
      email:this.signupForm.value.email,
      password:this.signupForm.value.password,
      mobileNumber:this.signupForm.value.mobileNumber,
      service:"advance"
  

    }
     console.log(req)
     this.userService.signupUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("Registration successfully ", ' ', {
        duration: 1000,
      });

    }, (error: any) => {
      console.log(error); 
      this.snackBar.open("Registration failed ", ' ', {
        duration: 1000,   
    }) ;

  })

   }
   // convenience getter for easy access to form fields
get f() { return this.signupForm.controls; }


}
