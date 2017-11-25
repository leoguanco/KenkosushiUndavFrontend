import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {GLOBAL} from "./global";


@Injectable()
export class UserService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  addUser(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/admin/users',json,{headers: this.headers});

  }

  updateUser(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api+'/admin/users'+id,json,{headers: this.headers});
  }

  deleteUser(id){
    return this._http.delete(this.api+'/admin/users'+id,{headers: this.headers});

  }

  getAllUser(){
    return this._http.get(this.api+'/admin/users',{headers:this.headers})
      .map(res => res.json());
  }
  getUser(id){
    return this._http.get(this.api+'/admin/users'+id,{headers:this.headers})
      .map(res => res.json());
  }

  addUserAddress(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/admin/address',json,{headers:this.headers});
  }

  updateUserAddress(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api+'/admin/address'+id,json,{headers: this.headers});
  }

  deleteUserAddress(id){
    return this._http.delete(this.api+'/admin/address'+id,{headers: this.headers});
  }

  getAllUserAddress(){
    return this._http.get(this.api+'/admin/address',{headers:this.headers})
      .map(res => res.json());
  }

  addUserPhone(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/admin/phones',json,{headers: this.headers});
  }

  updateUserPhone(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api+'/admin/phones'+id,json,{headers: this.headers});
  }

  deleteUserPhone(id){
    return this._http.delete(this.api+'/admin/phones'+id,{headers: this.headers});
  }

  getAllUserPhone(){
    return this._http.get(this.api+'/admin/phones',{headers:this.headers})
      .map(res => res.json());
  }

  addUserPurchase(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/admin/purchases',json,{headers: this.headers});
  }
  updateUserPurchase(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api+'/admin/purchases'+id,json,{headers: this.headers});
  }

  deleteUserPurchases(id){
    return this._http.delete(this.api+'/admin/purchases'+id,{headers: this.headers});
  }

  getAllUserPurchases(){
    return this._http.get(this.api+'/admin/purchases',{headers:this.headers})
      .map(res => res.json());
  }

  addUserRole(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/admin/roles',json,{headers: this.headers});
  }
  deleteUserRole(id){
    return this._http.delete(this.api+'/admin/roles'+id,{headers: this.headers});
  }





}
