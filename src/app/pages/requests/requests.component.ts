import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../services/computers.service";
import value from "*.json";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  computers: Computer[] = [];

  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.computers = data.filter((value:Computer)=>!value.allowed));
  }

  public delete(computer: Computer): void {
    this.service.delete(computer.id);
    this.remove(computer);
  }

  public allow(computer: Computer): void {
    computer.allowed=true;
    this.service.save(computer).subscribe();
    this.remove(computer);
  }
  public remove(computer: Computer): void {
    var index = this.computers.findIndex(x => x.id ==computer.id);
    this.computers.splice(index, 1);

  }

}
