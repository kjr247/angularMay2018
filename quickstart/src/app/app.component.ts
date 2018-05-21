import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, use as html tag <my-app>
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
   name = 'Angular';
}
