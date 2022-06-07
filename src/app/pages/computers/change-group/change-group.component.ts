import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../services/configurations.service";
import {group} from "../../../models/group.model";
import {GroupsService} from "../../../services/groups.service";
import {computer} from "../../../models/computer.model";
import {ComputersService} from "../../../services/computers.service";
import {configurationAssignment} from "../../../models/ConfigurationAssignments.model";
import {groupComputers} from "../../../models/GroupComputer.model";

@Component({
  selector: 'app-change-group',
  templateUrl: './change-group.component.html',
  styleUrls: ['./change-group.component.scss']
})
export class ChangeGroupComponent implements OnInit {


  @Output()
  public unselectedComputers: EventEmitter<computer[]> = new EventEmitter<computer[]>();

  unselectedComputersArray: computer[] = [];
  public selectedComputersArray: computer[] = [];

  public model: group = new group();

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:GroupsService,
    private computerService: ComputersService,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(
      x=> this.model = x
    );
    this.computerService.findAll().subscribe(data => this.unselectedComputersArray = data.filter(x=> this.model.groupComputers.filter(y=>y.computerId == x.id).length==0).filter((value:computer)=>value.allowed));
  }


  test(): void {
    this.model.groupComputers.forEach(x=> console.log(x.computer.name))
  }
  public saveSelected(data:computer[]): void{
    this.selectedComputersArray = data;
  }
  public Confirm(): void {
    this.selectedComputersArray.forEach(x=>this.addPctoModel(x));
    this.computerService.findAll().subscribe(data => this.unselectedComputersArray = data.filter(x=> this.model.groupComputers.filter(y=>y.computerId == x.id).length==0).filter((value:computer)=>value.allowed));
    // todo: Je nutne vyfiltrovat na ty ktere tam uz byli pridane


  }
  removePcFromList(ass:groupComputers): void{
    const index = this.model.groupComputers.findIndex(x=>x.computerId == ass.computerId);
    if (index > -1) {
      this.model.groupComputers.splice(index, 1);
    }
    //this.service.save(this.model).subscribe(x=>console.log("ukladaaaaaa se smazani pc v configuraci:"+ x.name))
  }
  public addPctoModel(pc:computer):void{
    var groupComputers1 = new groupComputers();
    groupComputers1.computer = pc;
    groupComputers1.groupId = this.model.id;
    groupComputers1.computerId = pc.id;
    groupComputers1.group = this.model;

    this.model.groupComputers.push(groupComputers1);
  }




}
