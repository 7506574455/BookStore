import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackBar:MatSnackBar,private router:Router, private userService:UserService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }


  onSubmit() {

    console.log("onsubmit function is calling", this.loginForm.value);
  
    let req={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
     
    }
  
    console.log(req)
    
    this.userService.loginadmin(req).subscribe((response: any) =>{
      console.log(response);
      localStorage.setItem('token',response.result.accessToken)
     
      this.router.navigateByUrl('/bookdashboard')
      
  
      this.snackBar.open("Admin Login successfully ", ' ', {
        duration: 1000,
     });
  
    }, (error:any) => {
      console.log(error);
  
      this.snackBar.open("Admin Login failed ", ' ', {
        duration: 1000,
     });
  
    })
  }

  
}
