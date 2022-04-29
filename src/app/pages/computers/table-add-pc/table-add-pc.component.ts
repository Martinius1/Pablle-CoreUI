import { Component, OnInit } from '@angular/core';
import {Computer} from "../../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../../services/computers.service";

@Component({
  selector: 'app-table-add-pc',
  templateUrl: './table-add-pc.component.html',
  styleUrls: ['./table-add-pc.component.scss']
})
export class TableAddPcComponent implements OnInit {

  computers: Computer[] = [];

  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:Computer)=>value.allowed));
  }



}
