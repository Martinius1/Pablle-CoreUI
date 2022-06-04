import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigurationsService} from "../../../services/configurations.service";
import {group} from "../../../models/group.model";
import {GroupsService} from "../../../services/groups.service";

@Component({
  selector: 'app-change-group',
  templateUrl: './change-group.component.html',
  styleUrls: ['./change-group.component.scss']
})
export class ChangeGroupComponent implements OnInit {

  public model: group = new group();

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:GroupsService,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(
      x=> this.model = x
    );
  }

}
