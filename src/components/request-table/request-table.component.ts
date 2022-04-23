import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {

  @Input()
  public computers: Computer[] = [];

  @Output()
  public selected: EventEmitter<Computer> = new EventEmitter<Computer>();

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(computer: Computer): void {
    this.selected.emit(computer);
  }

}
