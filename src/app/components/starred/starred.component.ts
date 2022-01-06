import { Starred } from './../../models/starred';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {

  @Input() public starreds: Starred[];

  constructor() { }

  ngOnInit(): void {
  }

}
