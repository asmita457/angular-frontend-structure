import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPassbookComponent } from './vendor-passbook.component';

describe('VendorPassbookComponent', () => {
  let component: VendorPassbookComponent;
  let fixture: ComponentFixture<VendorPassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
