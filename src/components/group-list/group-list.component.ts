import {Component, Input, OnInit} from '@angular/core';
import {group} from "../../app/models/group.model";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {


  @Input()
  public groups: group[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  public onClick(groupselected: group): void{
    console.log(groupselected)
  }

}
