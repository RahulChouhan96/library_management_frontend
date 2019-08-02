import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIssuedComponent } from './books-issued.component';

describe('BooksIssuedComponent', () => {
  let component: BooksIssuedComponent;
  let fixture: ComponentFixture<BooksIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
