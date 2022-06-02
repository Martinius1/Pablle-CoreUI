import {Component, Input, OnInit} from '@angular/core';
import {configuration} from "../../../../models/configuration.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../../services/configurations.service";

@Component({
  selector: 'app-config-add-source',
  templateUrl: './config-add-source.component.html',
  styleUrls: ['./config-add-source.component.scss']
})
export class ConfigAddSourceComponent implements OnInit {

  @Input()
  public model: configuration = new configuration();

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(
      x=> this.model = x
    );
  }

}
