import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {GLOBAL} from './global';

@Injectable()
export class LoginService {
  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  login(body) {
    const json = JSON.stringify(body);
    // petición por get a esa url de un api rest de pruebas
    return this._http.post(this.api + '/login', json , {headers: this.headers});
  }

}
