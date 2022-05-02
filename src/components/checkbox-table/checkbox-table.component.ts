import { Component, OnInit } from '@angular/core';
import {computer} from "../../app/models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../app/services/computers.service";

@Component({
  selector: 'app-checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.scss']
})
export class CheckboxTableComponent implements OnInit {

  computers: computer[] = [];

  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:computer)=>value.allowed));
  }



}
