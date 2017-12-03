import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";
import {User} from "../../../class/user";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public token: string = localStorage.getItem('token');
  public admin = false;
  private errorMessage: any;
  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    this.isAdmin();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

  isAdmin() {

    this._loginService.whoAmI()
      .subscribe(
        response2 => {
          localStorage.setItem('user', JSON.stringify(response2));
          JSON.parse(localStorage.getItem('user')).role.forEach(item => {
            if (item.role === 'ROLE_ADMIN') {
              this.admin = true;
            }
          });
        }, error2 => {
          this.errorMessage = <any>error2;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }
}
