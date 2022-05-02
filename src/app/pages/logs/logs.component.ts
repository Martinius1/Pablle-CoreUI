import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {reports} from "../../models/Report.model";
import {Router} from "@angular/router";
import {ReportsService} from "../../services/reports.service";


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {
  showMe: boolean = true;
  model = 1;
  reports: reports[] = [];
  constructor(private calendar: NgbCalendar,
              private router : Router,
              private service : ReportsService) { }
  selectToday() {  }
  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.reports = data);
  }

  toogleTag()
  {
    this.showMe=!this.showMe;
  }


}



imports: [
  NgbModule
]
