import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Computer} from "../../app/models/computer.model";

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent implements OnInit {

  @Input()
  public form: FormGroup = {} as FormGroup

  @Output()
  public saved: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  public model: Computer = new Computer;

  constructor() { }

  ngOnInit(): void {};

  public show():void{
    console.log(this.model.name);
    console.log(this.model.id);
  }

  public submit(): void {
    console.log(this.model.name);
    console.log(this.model.id);
    if (this.form.valid)
      this.saved.emit();
  }

}
