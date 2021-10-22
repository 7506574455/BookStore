import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

import { GetallbookComponent } from './getallbook.component';

describe('GetallbookComponent', () => {
  let component: GetallbookComponent;
  let fixture: ComponentFixture<GetallbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbookComponent 
      ],
      imports:[HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set getallbook submitted to true',(() => {
    component.getAllBooks();
    expect(component.getAllBooks).toBeTruthy();

 }));


});
