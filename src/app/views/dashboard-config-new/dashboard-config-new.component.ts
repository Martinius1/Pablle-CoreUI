import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {configuration} from "../../models/configuration.model";
import {ConfigurationsService} from "../../services/configurations.service";


@Component({
  selector: 'app-dashboard-config-new',
  templateUrl: './dashboard-config-new.component.html',
  styleUrls: ['./dashboard-config-new.component.scss']
})
export class DashboardConfigNewComponent implements OnInit {

  public configuration: configuration = new configuration();
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {
    //this.service.findById(id).subscribe(configuration=>{
      //this.configuration= configuration;
      //this.form = this.createFrom(this.computer)
  }

}
