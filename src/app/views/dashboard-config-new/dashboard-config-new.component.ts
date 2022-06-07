import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {configuration} from "../../models/configuration.model";
import {ConfigurationsService} from "../../services/configurations.service";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-dashboard-config-new',
  templateUrl: './dashboard-config-new.component.html',
  styleUrls: ['./dashboard-config-new.component.scss']
})
export class DashboardConfigNewComponent implements OnInit {

  public Configuration: configuration = new configuration();



  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {
    //this.service.save(this.Configuration).subscribe(x=>this.Configuration = x);
    //console.log(this.Configuration.id + "tohle je id nove configurace")
  }
  public save(config:configuration): void {
    Object.assign(this.Configuration,config);

    this.service.save(this.Configuration).subscribe(configuration=>{
      this.router.navigate(['dashboard'])
    })
  }

}

