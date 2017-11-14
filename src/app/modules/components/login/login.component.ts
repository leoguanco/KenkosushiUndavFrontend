import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

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

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this._loginService.login(this.form)
      .subscribe(
        response => {
          // const payload = res.json();
          this.headers = response.headers.get('Authorization');
          console.log(this.headers);
      },
        error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            alert(this.errorMessage);
          }
        });
  }

}
