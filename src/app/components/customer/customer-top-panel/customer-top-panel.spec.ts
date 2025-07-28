import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTopPanel } from './customer-top-panel';

describe('CustomerTopPanel', () => {
  let component: CustomerTopPanel;
  let fixture: ComponentFixture<CustomerTopPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTopPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTopPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
