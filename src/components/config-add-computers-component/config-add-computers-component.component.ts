import {Component, Input, OnInit} from '@angular/core';
import {computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-config-add-computers-component',
  templateUrl: './config-add-computers-component.component.html',
  styleUrls: ['./config-add-computers-component.component.scss']
})
export class ConfigAddComputersComponentComponent implements OnInit {

  @Input()
  public computers: computer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
