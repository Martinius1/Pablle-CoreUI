import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-dashboard-config-edit',
  templateUrl: './dashboard-config-edit.component.html',
  styleUrls: ['./dashboard-config-edit.component.scss']
})
export class DashboardConfigEditComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
  }

}

