import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';

  constructor(
    private loggerService: LoggerService,
    private http: Http
  ) { }

  getCustomersP(): Promise<Customer[]> {
    const customers = createTestCustomers();
    this.loggerService.log(`Getting customers  as a Promise via Http... `);

    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => {
        const custs = response.json().data as Customer[];
        this.loggerService.log(`Got ${custs.length} customers`);
        return custs;
      },
      error => {
        this.loggerService.log(`error occured: ${error}`)
        return Promise.reject('Something bad happened, please check the console.');
      }
    );
  }

  getCustomers (): Observable<Customer[]> {
    this.loggerService.log(`Getting customers  as a Observable ... `);
    const customers = createTestCustomers();

    return of(customers)
      .delay(1500)
      .do(() => {
        this.loggerService.log(`Got customers ${customers.length}`);
      });
  }
}
