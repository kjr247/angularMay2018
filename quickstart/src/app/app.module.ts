import { NgModule, CUSTOM_ELEMENTS_SCHEMA  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CustomerListComponent }  from './customer-list.component';
import { CustomerDetailComponent }  from './customer-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what stuff do I need?
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ], // what things are in my app?
  bootstrap:    [ AppComponent ], // where do I start?,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
