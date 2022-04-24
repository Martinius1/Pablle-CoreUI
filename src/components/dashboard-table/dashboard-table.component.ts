import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Configuration} from "../../app/models/configuration.model";
import {Computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input()
  public configurations: Configuration[] = [];

  @Output()
  public deleted: EventEmitter<Configuration> = new EventEmitter<Configuration>();

  constructor() { }

  ngOnInit(): void {
  }

  public delete(configuration: Configuration): void {
    this.deleted.emit(configuration);
  }

}
