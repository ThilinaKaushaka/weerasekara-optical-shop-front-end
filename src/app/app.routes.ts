import { Routes } from '@angular/router';
import { Customer } from './section/customer/customer';
import { Item } from './section/item/item';
import { Order } from './section/order/order';

export const routes: Routes = [
    {
        path:"customer-section",
        component:Customer
    },
    {
        path:"item-section",
        component:Item
    },
    {
        path:"order-section",
        component:Order
    }
];
