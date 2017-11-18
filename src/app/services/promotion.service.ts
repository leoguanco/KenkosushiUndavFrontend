import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {GLOBAL} from "./global";

@Injectable()
export class PromotionService {
  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  addPromotion(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api + '/admin/promotions', json , {headers: this.headers});
  }

  updatePromotion(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api + '/admin/promotions/' + id, json, {headers: this.headers});
  }

  deletePromotion(id){
    return this._http.delete(this.api + '/admin/promotions/' + id, {headers: this.headers});
  }

  getAllPromotion(){
    return this._http.get(this.api + '/public/promotions/', {headers: this.headers});
  }

  getPromotion(id){
    return this._http.get(this.api + '/public/promotions/' + id, {headers: this.headers});
  }


}
