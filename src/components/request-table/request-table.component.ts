import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {

  @Input()
  public computers: computer[] = [];

  @Output()
  public allowed: EventEmitter<computer> = new EventEmitter<computer>();
  @Output()
  public deleted: EventEmitter<computer> = new EventEmitter<computer>();

  constructor() { }

  ngOnInit(): void {
  }

  public allow(computer: computer): void {
    this.allowed.emit(computer);
  }
  public delete(computer: computer): void {
    this.deleted.emit(computer);
  }

}
