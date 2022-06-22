import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { AlertsService } from '../../services/alerts/alerts.service'

import { UserService } from '../../services/user/user.service';
import { UserI } from '../../models/user.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router, private alert: AlertsService, private userApi: UserService) { }

  errorStatus: boolean = false;
  errorMs: any = ""

  //Validad Campos requeridos
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email, Validators.minLength(9), Validators.maxLength(35)],),
    password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)])
  });

  onLogin(form: LoginI) {
    if (this.loginForm.valid) {
      this.login.loginUser(form).subscribe(data => {
        console.log(data)
        let dataResponse: ResponseI = data;

        if (dataResponse.dataUser.sms == "authorization") {
          this.alert.alertSuccess("login successful!");

          localStorage.setItem("token", data.dataUser.accessToken);
          localStorage.setItem("id", data.dataUser.user.username);
          localStorage.setItem("idUsuario", data.dataUser.user.idUsuario);
          localStorage.setItem("rool", data.dataUser.user.rool);

          this.router.navigate(['menu'])
        } else {
          this.errorStatus = true;
          this.errorMs = dataResponse.dataUser.sms
          this.alert.alertError("login failed!");
        }
      });
    } else {

      if (this.loginForm.get("password")?.value.length <= 7) {
        this.errorStatus = true;
        this.errorMs = "password is too short! (7-20)"
      } else {
        if (this.loginForm.get("password")?.value.length >= 20) {
          this.errorStatus = true;
          this.errorMs = "password is too  long! (7-20)"
        } else {
          this.errorStatus = true;
          this.errorMs = "incorrect format username: example@gmail.com (9-35)"
        }

      }
    }
  }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken() {
    if (localStorage.getItem("token")) {
      this.router.navigate(['menu'])
    }
  }


}
