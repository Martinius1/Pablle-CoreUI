import {Component, Input, OnInit} from '@angular/core';
import {configuration} from "../../../../models/configuration.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../../services/configurations.service";
import {sources} from "../../../../models/source.model";
import {Destination} from "../../../../models/destination.model";

@Component({
  selector: 'app-config-add-source',
  templateUrl: './config-add-source.component.html',
  styleUrls: ['./config-add-source.component.scss']
})
export class ConfigAddSourceComponent implements OnInit {

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
    var newsource = new sources();
    newsource.location = text;
    newsource.iD_Config = this.model.id

    this.model.sources.push(newsource)

  }
  removePcFromList(ass:sources): void{
    const index = this.model.sources.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.sources.splice(index, 1);
    }
  }


}
