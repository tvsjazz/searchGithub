import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly authService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['']))
      .catch((e) => console.log(e.message));
  }

}
