import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(value: any) {
    if (value === undefined && value === null) {
      return;
    }
    console.log(value);
  }

}
