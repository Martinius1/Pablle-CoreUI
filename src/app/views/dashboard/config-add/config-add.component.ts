import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {computer} from "../../../models/computer.model";
import {configuration} from "../../../models/configuration.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../services/configurations.service";
import {ComputersService} from "../../../services/computers.service";
import {configurationAssignment} from "../../../models/ConfigurationAssignments.model";
import {sources} from "../../../models/source.model";
import {Destination} from "../../../models/destination.model";
import {times} from "../../../models/Time.model";

@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.scss']
})
export class ConfigAddComponent implements OnInit {

  @Input()
  public model: configuration = new configuration;
  @Output()
  public saved: EventEmitter<configuration> = new EventEmitter<configuration>();
  public unselectedcomputers: computer[] = []
  public selectedcomputers: computer[] = []
  public textforsource: string = "";
  public textfordestination: string = "";
  public textforcron: string = "";
  ftp: boolean = true;

  constructor(
    private computerService:ComputersService,
    private configService:ConfigurationsService
  ) {}

  ngOnInit(): void {
    this.computerService.findAll().subscribe(data => this.unselectedcomputers = data.filter(x=> this.model.configurationAssignment.filter(y=>y.computerId == x.id).length==0).filter((value:computer)=>value.allowed));

  }
  selectClick(clickComputer: computer) {
    this.removePcfromunselected(clickComputer);
    this.selectedcomputers.push(clickComputer);
    //this.selectedPcOutput.emit(this.selectedComputers)
  }
  unselectClick(clickComputer: computer){
    this.removePcfromselected(clickComputer);
    this.unselectedcomputers.push(clickComputer);
    //this.selectedPcOutput.emit(this.selectedComputers)
  }
  removePcfromselected(pc:computer): void
  {
    const index = this.selectedcomputers.findIndex(x=>x.id == pc.id);
    if (index > -1) {
      this.selectedcomputers.splice(index, 1);
    }
  }
  removePcfromunselected(pc:computer):void
  {
    const index = this.unselectedcomputers.findIndex(x=>x.id == pc.id);
    if (index > -1) {
      this.unselectedcomputers.splice(index, 1);
    }
  }
  public addPctoModel(pc:computer):void{
    var configassign1 = new configurationAssignment();
    configassign1.computer = pc;
    configassign1.configId = this.model.id;
    configassign1.computerId = pc.id;
    configassign1.configuration = this.model;

    this.model.configurationAssignment.push(configassign1);
  }
  ConfirmPcAdd():void
  {
    this.selectedcomputers.forEach(x=>this.addPctoModel(x));
    this.selectedcomputers.forEach(x=>this.configService.addpctoconfig(this.model.id,x.id).subscribe(x=>console.log(x.computer.name)));

    this.selectedcomputers = [];
  }

  removePcFromList(ass:configurationAssignment): void{
    const index = this.model.configurationAssignment.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.configurationAssignment.splice(index, 1);
    }
  }
  // Tady zacina Add Source Compoment

  removeSourceFromList(ass:sources): void{
    const index = this.model.sources.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.sources.splice(index, 1);
    }
  }


  addSource():void {
    var newsource = new sources()
    newsource.location = this.textforsource
    newsource.iD_Config = this.model.id
    this.textforsource = ""
    this.model.sources.push(newsource)

  }
  //Tady zacina destination add compoment

  addDestination():void {
    var newsource = new Destination()
    newsource.path = this.textfordestination
    newsource.iD_Config = this.model.id
    this.textfordestination = ""
    this.model.destinations.push(newsource)

  }
  removeDestinationFromList(ass:Destination): void{
    const index = this.model.destinations.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.destinations.splice(index, 1);
    }
  }
  //Tady zacina Time Compoment

  addCron():void {
    var newsource = new times();
    newsource.cron = this.textforcron;
    newsource.iD_Config = this.model.id
    this.textfordestination = ""
    this.model.times.push(newsource)
  }

  public submit(): void {
      this.saved.emit(this.model);
  }

}
