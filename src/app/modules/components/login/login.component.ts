import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    username: '',
    password: ''
  };
  public errorMessage;
  public headers: any;

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._loginService.login(this.form)
      .subscribe(
        response => {
          this.headers = response.headers.get('Authorization');
          localStorage.setItem('token', this.headers);
          console.log(this.headers);

          this._router.navigate(['home']);
      },
        error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        });
  }

}
