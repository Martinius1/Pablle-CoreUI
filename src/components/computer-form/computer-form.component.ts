import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {computer} from "../../app/models/computer.model";
import {GroupsService} from "../../app/services/groups.service";
import {group} from "../../app/models/group.model";
import {filter} from "rxjs/operators";

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
  @Input()
  public model: computer = new computer;
  options: group[] = [];
  selectedgroup:group = new group();

  constructor(
    private service:GroupsService
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
    console.log(this.model.id);
    if (this.form.valid)
      //this.saved.emit();
      this.saved.emit(this.model);
  }

}
