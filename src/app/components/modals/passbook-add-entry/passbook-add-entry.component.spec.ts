import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookAddEntryComponent } from './passbook-add-entry.component';

describe('PassbookAddEntryComponent', () => {
  let component: PassbookAddEntryComponent;
  let fixture: ComponentFixture<PassbookAddEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookAddEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookAddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
