import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../services/configurations.service";
import {group} from "../../../models/group.model";
import {GroupsService} from "../../../services/groups.service";

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {



  constructor(

  ) { }

  ngOnInit(): void {

  }

}
