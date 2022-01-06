import { Starred } from './../models/starred';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  API = "https://api.github.com/users/";

  constructor(private httpClient: HttpClient) { }

  findGithubUsers(userName: string): Observable<any> {
    return this.httpClient.get(this.API + userName);
  }

  findReposByUser(userName: string): Observable<Starred[]> {
    return this.httpClient.get<Starred[]>(this.API + userName + '/repos');
  }

  findStarredByUser(userName: string): Observable<Starred[]> {
    return this.httpClient.get<Starred[]>(this.API + userName + '/starred');
  }
}
