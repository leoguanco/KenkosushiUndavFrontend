import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public username: string;
  public password: string;
  public lastLogin: Date;
  public isActive: Boolean;
  public name: string;
  public surname: string;
  public email: string;
  public observations: string;
  public errorMessage;
  public users;
  public user;

  public address: string;
  public floor: string;
  public office: string;
  public typeAdress: string;

  public phone: number;
  public typePhone: string;



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUser()
  }

  addUser(){
    const data={
      username: this.username,
      password: this.password,
      lastLogin: this.lastLogin,
      isActive: this.isActive,
      name: this.name,
      surname: this.surname,
      email: this.email,
      observations: this.observations
    };

    this.userService.addUser(data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  updateUser(item){
    const data={
      username: this.username,
      password: this.password,
      lastLogin: this.lastLogin,
      isActive: this.isActive,
      name: this.name,
      surname: this.surname,
      email: this.email,
      observations: this.observations
    };

    this.userService.updateUser(item.id, data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  deleteUser(item){
    this.userService.deleteUser(item.id)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getAllUser(){
    this.userService.getAllUser()
      .subscribe(
        response => {
          console.log(response);
          this.users = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getUser(item){
    this.userService.getUser(item.id)
      .subscribe(
        response => {
          console.log(response);
          this.user = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  addUserAddress(){
    const data={
      address: this.address,
      floor: this.floor,
      office: this.office,
      typeAddress: this.typeAdress
    };

    this.userService.addUserAddress(data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  updateUserAddress(item){
    const data={
      address: this.address,
      floor: this.floor,
      office: this.office,
      typeAddress: this.typeAdress
    };

    this.userService.updateUserAddress(item.id, data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );


  }

  deleteUserAddress(item){
    this.userService.deleteUserAddress(item.id)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getAllUserAddress(){
    this.userService.getAllUserAddress()
      .subscribe(
        response => {
          console.log(response);
          this.users = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  addUserPhone(){
    const data={
      phone: this.phone,
      typePhone: this.typePhone
    };

    this.userService.addUserPhone(data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  updateUserPhone(item){
    const data={
      phone: this.phone,
      typePhone: this.typePhone
    };

    this.userService.updateUserPhone(item.id, data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );

  }

  deleteUserPhone(item){
    this.userService.deleteUserPhone(item.id)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getAllUserPhone(){
    this.userService.getAllUserPhone()
      .subscribe(
        response => {
          console.log(response);
          this.users = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }








}
