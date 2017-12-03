import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()
export class PurchaseSystemService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  getPurchaseSystem() {
    return this._http.get(this.api + '/admin/purchasingSystem/', {headers: this.headers})
      .map(res => res.json());
  }

  updatePurchaseSystem(id, body) {
    const json = JSON.stringify(body);
    return this._http.put(this.api + '/admin/purchasingSystem/' + id, json, {headers: this.headers});
  }



}
