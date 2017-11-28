import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {GLOBAL} from "./global";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  addProduct(body) {
    const json = JSON.stringify(body);
    return this._http.post(this.api + '/admin/product', json ,{ headers: this.headers });
  }

  updateProduct(id, body) {
    const json = JSON.stringify(body);
    return this._http.put(this.api + '/admin/products/' + id, json, {headers: this.headers});
  }

  deleteProduct(id) {
    return this._http.delete(this.api + '/admin/products/' + id, {headers: this.headers});
  }

  getAllProduct() {
    return this._http.get(this.api + '/public/products/', {headers: this.headers})
      .map( res => res.json());
  }

  getProduct(id) {
    return this._http.get(this.api + '/public/products/' + id, {headers: this.headers})
      .map( res => res.json());
  }

}
