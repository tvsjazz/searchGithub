import { UserGithub } from './../../models/userGithub';
import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: any;
  userChange: boolean;

  isRepo: boolean = true;
  isStarred: boolean = false;

  login: string;
  avatar_url: string;
  name: string;
  followers_url: string;
  repos_url: string;
  starred_url: string;
  bio: string;
  location: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  findUsers() {
    this.githubService.findGithubUsers(this.search).subscribe(
      response => {
        this.login = response.login;
        this.avatar_url = response.avatar_url;
        this.name = response.name;
        this.followers_url = response.followers_url;
        this.repos_url = response.repos_url;
        this.starred_url = response.starred_url;
        this.bio = response.bio;
        this.location = response.location;
        this.userChange = true;
      }
    )
  }

}
