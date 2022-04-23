import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from "../../app/models/computer.model";
import {Group} from "../../app/models/group.model";

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})
export class ComputerTableComponent implements OnInit {

  @Input()
  public computers: Computer[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
