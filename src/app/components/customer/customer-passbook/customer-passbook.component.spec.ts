import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPassbookComponent } from './customer-passbook.component';

describe('CustomerPassbookComponent', () => {
  let component: CustomerPassbookComponent;
  let fixture: ComponentFixture<CustomerPassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
