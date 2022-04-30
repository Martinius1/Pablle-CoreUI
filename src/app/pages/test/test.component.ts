import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Router} from "@angular/router";
import {PcService} from "../../services/pc.service";
import {Configuration} from "../../models/configuration.model";
import {ConfigurationsService} from "../../services/configurations.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  configurations: Configuration[] = [];

  constructor(private router: Router,
              private service: ConfigurationsService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.configurations = data);
  }

}
