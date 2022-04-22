import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {
  showMe: boolean = true;
  model = 1;
  constructor(private calendar: NgbCalendar) { }
  selectToday() {  }
  ngOnInit(): void {
  }

  toogleTag()
  {
    this.showMe=!this.showMe;
  }


}



imports: [
  NgbModule
]
