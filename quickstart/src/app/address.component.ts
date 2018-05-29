import { Component, Input, OnInit } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit  {
  private isGettingStates = false;
  constructor(
    private dataService: DataService,
    private logger: LoggerService) { }

  @Input() address: Address;

  ngOnInit() {
    this.getStates();
  }

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = [''];
  getStates() {
    this.isGettingStates = true;
    this.logger.log(`Getting states ... `);
    this.dataService.getStates().subscribe( states => {
      this.isGettingStates = false;
      this.logger.log(`Got ${this.states.length}`);
      this.states = states;
    }, (errorMsg) => {
      this.isGettingStates = false;
      alert(errorMsg);
    });
  }
}
