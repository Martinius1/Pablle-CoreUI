import { Component, OnInit } from '@angular/core';
import {ConfigurationsService} from "../../services/configurations.service";
import {configuration} from "../../models/configuration.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  configurations: configuration[] = [];

  constructor(
    private service:ConfigurationsService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.configurations = data);
    console.log(this.configurations[1].name)

  }
  public delete(configuration: configuration): void {
    this.service.delete(configuration.id);
    this.remove(configuration);
  }

  public remove(configuration: configuration): void {
    var index = this.configurations.findIndex(x => x.id ==configuration.id);
    this.configurations.splice(index, 1);

  }

}
