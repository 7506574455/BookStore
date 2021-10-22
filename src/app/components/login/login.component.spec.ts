import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBar,MatSnackBarModule} from  '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent 
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
    component.loginForm.controls['email'].setValue('javed123@gmail.com');
    component.loginForm.controls['password'].setValue('78945612');
    expect(component.loginForm.invalid).toBeFalsy();
  }));

  it('Form should be valid', async(()=> {
    component.loginForm.controls['email'].setValue('sanketlalge4@gmail.com');
    component.loginForm.controls['password'].setValue('Sanket@123');
    expect(component.loginForm.valid).toBeTruthy();
  }));

 
});
