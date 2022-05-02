import {Component, Input, OnInit} from '@angular/core';
import {reports} from "../../../models/Report.model";

@Component({
  selector: 'app-msg-log',
  templateUrl: './msg-log.component.html',
  styleUrls: ['./msg-log.component.scss']
})
export class MsgLogComponent implements OnInit {

  @Input()
  public reports: reports[] = [];

  constructor() {}

  ngOnInit(): void {

  }

}
