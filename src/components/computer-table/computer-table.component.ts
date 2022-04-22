import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})
export class ComputerTableComponent implements OnInit {

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
