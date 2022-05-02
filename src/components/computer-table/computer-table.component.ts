import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {computer} from "../../app/models/computer.model";


@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})
export class ComputerTableComponent implements OnInit {

  @Input()
  public computers: computer[] = [];
  @Output()
  public selected: EventEmitter<computer> = new EventEmitter<computer>();

  constructor() { }

  ngOnInit(): void {
  }

  public edit(computer:computer):void{
    this.selected.emit(computer);
  }


}
