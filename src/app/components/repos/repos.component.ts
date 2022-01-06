import { Repo } from './../../models/repos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  @Input() public repos: Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
