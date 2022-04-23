import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {};

  public submit(): void {
    if (this.form.valid)
      this.saved.emit();
  }

}
