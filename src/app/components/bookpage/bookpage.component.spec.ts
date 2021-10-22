import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BookpageComponent } from './bookpage.component';

describe('BookpageComponent', () => {
  let component: BookpageComponent;
  let fixture: ComponentFixture<BookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookpageComponent 
      ],
      imports:[HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set get book data submitted to true',(() => {
    component.getData();
    expect(component.getData).toBeTruthy();

 }));
});
