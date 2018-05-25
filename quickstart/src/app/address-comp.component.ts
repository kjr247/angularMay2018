import { Component, Input } from '@angular/core';
import { Address, Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'address-comp', // to use me, use as html tag <my-app>
  templateUrl: 'address-comp.component.html'
})

export class AddressComponent  {
  @Input() address: Address;
  regions = ['East', 'South', 'West', 'North', 'Midwest', 'Trump Tower'];
  states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
  @Input() customer: Customer;
  showAddress = true;
}
