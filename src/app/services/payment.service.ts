import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()
export class PaymentService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  save(body){

  }

}
