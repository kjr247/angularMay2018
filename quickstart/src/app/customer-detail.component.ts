import { Component, Input } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail', // to use me, use as html tag <my-app>
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent  {
  regions = ['East', 'South', 'West', 'North', 'Midwest', 'Trump Tower'];
  states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
  @Input() customer: Customer;
  showAddress = true;
}
