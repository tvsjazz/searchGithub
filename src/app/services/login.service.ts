import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Auth, signInWithPopup, GithubAuthProvider, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  login() {
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

}
