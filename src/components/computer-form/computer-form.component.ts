import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {computer} from "../../app/models/computer.model";
import {GroupsService} from "../../app/services/groups.service";
import {group} from "../../app/models/group.model";
import {filter} from "rxjs/operators";
import {groupComputers} from "../../app/models/GroupComputer.model";
import {ComputersService} from "../../app/services/computers.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import value from "*.json";


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
    private computerservice:ComputersService
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
  public addToPc(Computer:computer):void
  {
    this.service.findById(this.selectedgroup.id).subscribe(x=>this.addToGroup(Computer,x));

  }
  public addToGroup(Computer:computer,Group:group): void{
    const a1 = {
      group:Group,
      groupId:this.selectedgroup.id,
      computer:Computer,
      computerId:this.model.id
    };
    //this.TestComputer = Computer;
    //this.TestGroup = Group;
    //this.TestComputer.groupComputers.push(a1);
    //Object.assign(this.model,this.TestComputer);
    //this.model.groupComputers.push(a1);
    //this.selectedgroup.groupComputers.push(a1);
    //this.service.save(this.selectedgroup).subscribe(x=>console.log(x.name+" ulozeno"));
  }


public addGroup(): void {
    this.computerservice.findById(this.model.id).subscribe(x=>this.addToPc(x));
    console.log(this.model.name);
    console.log(this.selectedgroup.name);
  this.model.groupComputers.every(x=>console.log(x.group.name));
}
/*
    public save(model:computer): void {
      Object.assign(this.computer,model);

      this.service.save(this.computer).subscribe(computer=>{
        this.router.navigate(['computers'])
      })
    }
  public saveGroupComputer(model:computer, selectedGroup:group): void {
    Object.assign(this.groupComputer.computerId,model.id);
    Object.assign(this.groupComputer.groupId,selectedGroup.id);

    console.log(model.id)
    console.log(selectedGroup.id)


  }*/

}
