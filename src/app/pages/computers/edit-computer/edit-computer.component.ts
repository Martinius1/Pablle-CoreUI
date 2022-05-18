import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComputersService} from "../../../services/computers.service";
import {computer} from "../../../models/computer.model";

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.scss']
})
export class EditComputerComponent implements OnInit {

  public computer:computer=new computer();
  public emptycomputer:computer = new  computer();

  public form:FormGroup= {} as FormGroup;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private service:ComputersService
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    this.service.findById(id).subscribe(computer=>{
      this.computer= computer;
      this.form = this.createFrom(this.computer)
    });
  }
  private createFrom(computer:computer): FormGroup{
    return this.fb.group({
      username:[computer.name,Validators.required],
      ip:[computer.ip,Validators.required],
      mac:[computer.mac,Validators.required]
    });
  }
  public save(model:computer): void {
    Object.assign(this.computer,model);

    this.service.save(this.computer).subscribe(computer=>{
      this.router.navigate(['computers'])
    })
  }

}
