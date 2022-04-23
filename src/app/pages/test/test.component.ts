import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Router} from "@angular/router";
import {PcService} from "../../services/pc.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  computers: Computer[] = [];

  constructor(private router: Router,
              private service: PcService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data);
  }

}
