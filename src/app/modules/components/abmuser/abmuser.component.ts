import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-abmuser',
  templateUrl: './abmuser.component.html',
  styleUrls: ['./abmuser.component.css']
})
export class AbmuserComponent implements OnInit {
  public user: User;
  public users: Array<User>;
  public errorMessage;
  public view: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUser();
    this.view = 'user';
    this.user = new User();
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
          this.user = new User();
          this.getAllUser();
          this.view = 'user';
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  editUser(item) {
    this.user = item;
    this.view = 'edit';
  }

  updateUser(item) {
    const data = {
      id: this.user.id,
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

}
