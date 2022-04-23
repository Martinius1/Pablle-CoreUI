import {Component, Input, OnInit} from '@angular/core';
import {Computer} from "../../app/models/computer.model";
import {Group} from "../../app/models/group.model";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {


  @Input()
  public groups: Group[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
