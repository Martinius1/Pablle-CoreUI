import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Group} from "../../models/group.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../services/computers.service";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  computers: Computer[] = [];
  groups: Group[] = [];

  constructor(private router: Router,
              private service: ComputersService,
              private groupsService: GroupsService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:Computer)=>value.allowed));
    this.groupsService.findAll().subscribe(data => this.groups = data);
  }

  public edit(computer: Computer): void {

  }

}



