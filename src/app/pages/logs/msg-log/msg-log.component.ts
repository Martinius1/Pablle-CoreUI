import {Component, Input, OnInit} from '@angular/core';
import { Report } from "../../../models/Report.model";
import {Router} from "@angular/router";
import {Computer} from "../../../models/computer.model";
import {ReportsService} from "../../../services/reports.service";

@Component({
  selector: 'app-msg-log',
  templateUrl: './msg-log.component.html',
  styleUrls: ['./msg-log.component.scss']
})
export class MsgLogComponent implements OnInit {

  @Input()
  public reports: Report[] = [];

  constructor() {}

  ngOnInit(): void {

  }

}
