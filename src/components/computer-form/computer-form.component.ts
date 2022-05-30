import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {computer} from "../../app/models/computer.model";
import {GroupsService} from "../../app/services/groups.service";
import {group} from "../../app/models/group.model";
import {filter} from "rxjs/operators";
import {groupComputers} from "../../app/models/GroupComputer.model";
import {ComputersService} from "../../app/services/computers.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent implements OnInit {

  @Input()
  public form: FormGroup = {} as FormGroup
  @Output()
  public saved: EventEmitter<computer> = new EventEmitter<computer>();
  @Output()
  public savedGroup: EventEmitter<group> = new EventEmitter<group>();
  @Input()
  public model: computer = new computer;
  options: group[] = [];

  @Input()
  public selectedgroup: group = new group();

  constructor(
    private service:GroupsService,
    private computerservice:ComputersService,
  private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.options = data.filter(x=> this.model.groupComputers.filter(y=>y.computerId == x.id).length==0))
  };

  public show():void{
    console.log(this.model.name);
    console.log(this.model.id);
    console.log(this.selectedgroup.name);
  }

  public submit(): void {
    console.log(this.model.name);
    console.log(this.selectedgroup.name);
    console.log(this.selectedgroup.id);
    if (this.form.valid)
      //this.saved.emit();
      this.saved.emit(this.model);
      //this.savedGroup.emit(this.selectedgroup);
  }


public addGroup(): void {
    console.log(this.model.name);
    console.log(this.selectedgroup.name);
  const a1 = {
    group:this.selectedgroup,
    groupId:this.selectedgroup.id,
    computer:this.model,
    computerId:this.model.id
  };

  const a2 = {
    group:this.selectedgroup,
    groupId:this.selectedgroup.id,
    computer:this.model,
    computerId:this.model.id
  };
  //this.selectedgroup.groupComputers.push(a2);
  this.service.save(this.selectedgroup);
    this.model.groupComputers.push(a1);
    this.model.groupComputers.every(x=>console.log(x.group.name));
    //this.computerservice.save(this.model);

}

}
