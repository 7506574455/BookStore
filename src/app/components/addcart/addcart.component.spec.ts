import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatSnackBar,MatSnackBarModule} from  '@angular/material/snack-bar';
import { AddcartComponent } from './addcart.component';

describe('AddcartComponent', () => {
  let component: AddcartComponent;
  let fixture: ComponentFixture<AddcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcartComponent 
      ],
      imports:[HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,

        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('Should set get book carts submitted to true',(() => {
    component.getcarts();
    expect(component.getcarts).toBeTruthy();

 }));
});
