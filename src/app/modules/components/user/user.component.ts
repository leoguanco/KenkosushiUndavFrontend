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






}
