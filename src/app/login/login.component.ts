import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly authService: LoginService,
    private readonly router: Router) {
  }

  login() {
    this.authService
    .login()
    .then(() => this.router.navigate(['home']))
    .catch((e) => console.log(e.message));
  }

}
