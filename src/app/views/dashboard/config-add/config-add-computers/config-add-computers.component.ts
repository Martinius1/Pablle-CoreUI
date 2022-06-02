import {Component, Input, OnInit} from '@angular/core';
import {computer} from "../../../../models/computer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ComputersService} from "../../../../services/computers.service";
import {configuration} from "../../../../models/configuration.model";
import {ConfigurationsService} from "../../../../services/configurations.service";

@Component({
  selector: 'app-config-add-computers',
  templateUrl: './config-add-computers.component.html',
  styleUrls: ['./config-add-computers.component.scss']
})
export class ConfigAddComputersComponent implements OnInit {

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
