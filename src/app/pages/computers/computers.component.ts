import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../services/computers.service";


@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


