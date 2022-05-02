import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {configuration} from "../../models/configuration.model";
import {ConfigurationsService} from "../../services/configurations.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  configurations: configuration[] = [];

  constructor(private router: Router,
              private service: ConfigurationsService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.configurations = data);
  }

}
