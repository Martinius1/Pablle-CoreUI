import { Component, OnInit } from '@angular/core';
import {Computer} from "../../../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../../../services/computers.service";

@Component({
  selector: 'app-config-add-computers',
  templateUrl: './config-add-computers.component.html',
  styleUrls: ['./config-add-computers.component.scss']
})
export class ConfigAddComputersComponent implements OnInit {

  computers: Computer[] = [];

  constructor(private router: Router,
              private service: ComputersService,) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data);
  }

}
