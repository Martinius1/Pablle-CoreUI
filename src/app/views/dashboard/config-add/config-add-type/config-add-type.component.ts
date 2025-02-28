import {Component, Input, OnInit} from '@angular/core';
import {computer} from "../../../../models/computer.model";
import {configuration} from "../../../../models/configuration.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../../services/configurations.service";

@Component({
  selector: 'app-config-add-type',
  templateUrl: './config-add-type.component.html',
  styleUrls: ['./config-add-type.component.scss']
})
export class ConfigAddTypeComponent implements OnInit {

  @Input()
  public model: configuration = new configuration();

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {

  }

}
