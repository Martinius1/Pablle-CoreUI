import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config-add-schedule',
  templateUrl: './config-add-schedule.component.html',
  styleUrls: ['./config-add-schedule.component.scss']
})
export class ConfigAddScheduleComponent implements OnInit {
  placement = 'right';
  time = {hour: 13, minute: 30};
  model!: NgbDateStruct;
  date!: {year: number, month: number};
  showMe:boolean = true
  constructor(private calendar: NgbCalendar) { }
  public text: string = "";

  ngOnInit(): void {

  }
  toogleTag()
  {
    this.showMe=!this.showMe;
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
