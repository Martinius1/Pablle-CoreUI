import { Component, OnInit } from '@angular/core';
import {computer} from "../../models/computer.model";
import {group} from "../../models/group.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../services/computers.service";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  computers: computer[] = [];
  groups: group[] = [];

  constructor(private router: Router,
              private service: ComputersService,
              private groupsService: GroupsService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:computer)=>value.allowed));
    this.groupsService.findAll().subscribe(data => this.groups = data);
  }

  public edit(computer:computer): void {
    this.router.navigate([ 'computers', computer.id ]);
  }

}



