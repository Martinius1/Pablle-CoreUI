import {Component, Input, OnInit} from '@angular/core';
import {configuration} from "../../../../models/configuration.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../../services/configurations.service";
import {sources} from "../../../../models/source.model";
import {Destination} from "../../../../models/destination.model";
import {configurationAssignment} from "../../../../models/ConfigurationAssignments.model";

@Component({
  selector: 'app-config-add-destination',
  templateUrl: './config-add-destination.component.html',
  styleUrls: ['./config-add-destination.component.scss']
})
export class ConfigAddDestinationComponent implements OnInit {
  howMe: boolean = true;
  pokus = 1;
  @Input()
  public model: configuration = new configuration();
  public text: string = "";

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
  ) { }

  ngOnInit(): void {

  }
  getValue(text:string) {
    var newsource = new Destination();
    newsource.path = text;
    newsource.iD_Config = this.model.id

    this.model.destinations.push(newsource)

  }
  removePcFromList(ass:Destination): void{
    const index = this.model.destinations.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.destinations.splice(index, 1);
    }
  }


}
