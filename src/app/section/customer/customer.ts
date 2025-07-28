import { Component } from '@angular/core';
import { CustomerTopPanel } from "../../components/customer/customer-top-panel/customer-top-panel";
import { CustomerDetailsView } from "../../components/customer/customer-details-view/customer-details-view";

@Component({
  selector: 'app-customer',
  imports: [CustomerTopPanel, CustomerDetailsView],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

}
