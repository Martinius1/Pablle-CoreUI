import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {configuration} from "../../app/models/configuration.model";

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input()
  public configurations: configuration[] = [];

  @Output()
  public deleted: EventEmitter<configuration> = new EventEmitter<configuration>();

  constructor() { }

  ngOnInit(): void {
  }

  public delete(configuration: configuration): void {
    this.deleted.emit(configuration);
  }

}
