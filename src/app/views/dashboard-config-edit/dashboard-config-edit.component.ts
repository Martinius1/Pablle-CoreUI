import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../services/configurations.service";
import {configuration} from "../../models/configuration.model";


@Component({
  selector: 'app-dashboard-config-edit',
  templateUrl: './dashboard-config-edit.component.html',
  styleUrls: ['./dashboard-config-edit.component.scss']
})
export class DashboardConfigEditComponent implements OnInit {

  public configuration: configuration = new configuration();

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(
      x=> this.configuration = x
    );
  }
  public save(config:configuration): void {
    Object.assign(this.configuration,config);

    this.service.save(this.configuration).subscribe(configuration=>{
      this.router.navigate(['configuration'])
    })
  }



}

