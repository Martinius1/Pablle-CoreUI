import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {computer} from "../../../../models/computer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ComputersService} from "../../../../services/computers.service";
import {configuration} from "../../../../models/configuration.model";
import {ConfigurationsService} from "../../../../services/configurations.service";
import value from "*.json";
import {configurationAssignments} from "../../../../models/ConfigurationAssignments.model";

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
    this.computerService.findAll().subscribe(data => this.unselectedComputersArray = data);
    this.unselectedComputers.emit(this.unselectedComputersArray)
  }
  test(): void {
     this.model.configurationAssignments.forEach(x=> console.log(x.computer.name))
  }
  public Confirm(model1: computer[]): void {
    this.selectedComputersArray = model1
    console.log(this.selectedComputersArray)

    var configassign1 = new configurationAssignments();
    configassign1.computer = this.selectedComputersArray[0];
    configassign1.configId = this.model.id
    configassign1.computerId = this.selectedComputersArray[0].id;
    configassign1.configuration = this.model;

    this.model.configurationAssignments.push(configassign1);
    console.log(this.model.configurationAssignments)


    this.model.configurationAssignments.push()



  }


}
