import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../class/user' ;
import {Address} from '../../../class/address';
import {Phone} from '../../../class/phone';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public user: User;
  public errorMessage;
  public users: Array<User>;
  public address: Address;
  public phone: Phone;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUser();
  }

  addUser() {
    const data = {
      username: this.user.username,
      password: this.user.password,
      lastLogin: this.user.lastLogin,
      isActive: this.user.isActive,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      observations: this.user.observations
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

  updateUser(item) {
    const data = {
      username: this.user.username,
      password: this.user.password,
      lastLogin: this.user.lastLogin,
      isActive: this.user.isActive,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      observations: this.user.observations
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

  deleteUser(item) {
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

  getAllUser() {
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

  getUser(item) {
    this.userService.getUser(item.id)
      .subscribe(
        response => {
          console.log(response);
          this.user = response.data;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  addUserAddress() {
    const data = {
      address: this.address.address,
      floor: this.address.floor,
      office: this.address.office,
      typeAddress: this.address.typeAddress
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

  updateUserAddress(item) {
    const data = {
      address: this.address,
      floor: this.address.floor,
      office: this.address.office,
      typeAddress: this.address.typeAddress
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

  deleteUserAddress(item) {
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

  getAllUserAddress() {
    this.userService.getAllUserAddress()
      .subscribe(
        response => {
          console.log(response);
          this.users = response.data;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  addUserPhone() {
    const data = {
      phone: this.phone.phone,
      typePhone: this.phone.typePhone
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

  updateUserPhone(item) {
    const data = {
      phone: this.phone.phone,
      typePhone: this.phone.typePhone
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

  getAllUserPhone() {
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
