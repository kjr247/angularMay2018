import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }            from './app.component';
import { AddressComponent }        from './address.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent }   from './customer-list.component';
import { DataService }             from './data.service';
import { LoggerService }           from './logger.service';
import { InMemoryDataService }     from './in-memory-data-service';
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';

@NgModule({
  imports: [                  // What stuff do I need?
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), /* for ease of deving */
    HttpModule
  ],
  declarations: [             // What's in my app module?
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [ DataService, LoggerService ],
  bootstrap: [ AppComponent ] // Where do I start?
})
export class AppModule { }
