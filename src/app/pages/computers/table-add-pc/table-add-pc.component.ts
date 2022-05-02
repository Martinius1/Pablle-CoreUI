import { Component, OnInit } from '@angular/core';
import {computer} from "../../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../../services/computers.service";

@Component({
  selector: 'app-table-add-pc',
  templateUrl: './table-add-pc.component.html',
  styleUrls: ['./table-add-pc.component.scss']
})
export class TableAddPcComponent implements OnInit {

  computers: computer[] = [];

  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:computer)=>value.allowed));
  }



}
