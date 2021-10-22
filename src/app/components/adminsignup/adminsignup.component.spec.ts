import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AdminsignupComponent } from './adminsignup.component';
import { MatSnackBar,MatSnackBarModule} from  '@angular/material/snack-bar';

describe('AdminsignupComponent', () => {
  let component: AdminsignupComponent;
  let fixture: ComponentFixture<AdminsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsignupComponent 
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        
        MatSnackBarModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();

 }));

  
  it('Form should be invalid', async(()=> {
    component.signupForm.controls['fullName'].setValue('javed');
    component.signupForm.controls['email'].setValue('javed123@gmail.com');
    component.signupForm.controls['password'].setValue('789456123');
   
     component.signupForm.controls['mobileNumber'].setValue('7796656212');
    expect(component.signupForm.invalid).toBeFalsy();
  }));

  it('Form should be valid', async(()=> {
    component.signupForm.controls['fullName'].setValue('Sanket Lalge');
    component.signupForm.controls['email'].setValue('sanketlalge4@gmail.com');
    component.signupForm.controls['password'].setValue('Sanket@123');
     
     component.signupForm.controls['mobileNumber'].setValue('7506574455');
    expect(component.signupForm.valid).toBeTruthy();
  }));

});
