import { Starred } from './../../models/starred';
import { Repo } from './../../models/repos';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() public userChange: boolean;
  @Input() public login: string;
  @Input() public avatar_url: string;
  @Input() public name: string;
  @Input() public followers_url: string;
  @Input() public repos_url: string;
  @Input() public starred_url: string;
  @Input() public bio: string;
  @Input() public location: string;

  repos: Repo[];
  starreds: Starred[];

  isUser: boolean = true;
  isRepos: boolean = false;
  isStarred: boolean = false;

  constructor(private service: GithubService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.userChange) {
      this.showUser();
    }
  }

  showUser() {

    this.isUser = true;
    this.isRepos = false;
    this.isStarred = false;
  }

  showRepos() {
    this.service.findReposByUser(this.login).subscribe(
      response => this.repos = response
    )
    this.isUser = false;
    this.isRepos = true;
    this.isStarred = false;
  }

  showStarred() {
    this.service.findStarredByUser(this.login).subscribe(
      response => this.starreds = response
    )
    this.isUser = false;
    this.isRepos = false;
    this.isStarred = true;
  }

}
