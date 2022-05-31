import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {computer} from "../../../models/computer.model";
import {configuration} from "../../../models/configuration.model";

@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.scss']
})
export class ConfigAddComponent implements OnInit {
  showMe:boolean = true

  @Input()
  public model: configuration = new configuration;
  @Output()
  public saved: EventEmitter<configuration> = new EventEmitter<configuration>();

  constructor() { }

  ngOnInit(): void {

  }
  toogleTag()
  {
    this.showMe=!this.showMe;
  }

}
