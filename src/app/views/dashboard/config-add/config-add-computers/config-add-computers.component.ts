import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {computer} from "../../../../models/computer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ComputersService} from "../../../../services/computers.service";
import {configuration} from "../../../../models/configuration.model";
import {ConfigurationsService} from "../../../../services/configurations.service";
import value from "*.json";
import {configurationAssignment} from "../../../../models/ConfigurationAssignments.model";

@Component({
  selector: 'app-config-add-computers',
  templateUrl: './config-add-computers.component.html',
  styleUrls: ['./config-add-computers.component.scss']
})
export class ConfigAddComputersComponent implements OnInit {

  @Input()
  public model: configuration = new configuration();

  @Input()
  public testInput: computer[] = [];


  @Output()
  public unselectedComputers: EventEmitter<computer[]> = new EventEmitter<computer[]>();

  unselectedComputersArray: computer[] = [];
  public selectedComputersArray: computer[] = [];


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:ConfigurationsService,
    private computerService: ComputersService,
  ) { }

  ngOnInit(): void {
    this.computerService.findAll().subscribe(data => this.unselectedComputersArray = data.filter(x=> this.model.configurationAssignment.filter(y=>y.computerId == x.id).length==0).filter((value:computer)=>value.allowed));
    //this.unselectedComputers.emit(this.unselectedComputersArray)
  }
  removePcFromList(ass:configurationAssignment): void{
    const index = this.model.configurationAssignment.findIndex(x=>x.id == ass.id);
    if (index > -1) {
      this.model.configurationAssignment.splice(index, 1);
    }
  }
  test(): void {
     this.model.configurationAssignment.forEach(x=> console.log(x.computer.name))
  }
  public saveSelected(data:computer[]): void{
    this.selectedComputersArray = data;
  }
  public Confirm(): void {
    this.selectedComputersArray.forEach(x=>this.addPctoModel(x));
    this.computerService.findAll().subscribe(data => this.unselectedComputersArray = data.filter(x=> this.model.configurationAssignment.filter(y=>y.computerId == x.id).length==0).filter((value:computer)=>value.allowed));
    // todo: Je nutne vyfiltrovat na ty ktere tam uz byli pridane


  }
  public addPctoModel(pc:computer):void{
    var configassign1 = new configurationAssignment();
    configassign1.computer = pc;
    configassign1.configId = this.model.id;
    configassign1.computerId = pc.id;
    configassign1.configuration = this.model;

    this.model.configurationAssignment.push(configassign1);
  }


}
