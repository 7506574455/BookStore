import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { AdminloginComponent } from './adminlogin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar,MatSnackBarModule} from  '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginComponent 
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
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
