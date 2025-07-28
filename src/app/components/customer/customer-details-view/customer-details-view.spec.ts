import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsView } from './customer-details-view';

describe('CustomerDetailsView', () => {
  let component: CustomerDetailsView;
  let fixture: ComponentFixture<CustomerDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
