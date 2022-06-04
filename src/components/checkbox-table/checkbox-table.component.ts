import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {computer} from "../../app/models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../app/services/computers.service";

@Component({
  selector: 'app-checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.scss']
})
export class CheckboxTableComponent implements OnInit {


  @Input()
  public availableComputers: computer[] = [];
  @Output()
  public selectedPcOutput: EventEmitter<computer[]> = new EventEmitter<computer[]>();



  computers: computer[] = [];
  selectedComputers : computer[] = [];
  public isTrue: boolean = false;


  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data.filter((value:computer)=>value.allowed));

  }
  test() {
    console.log(this.selectedComputers)


  }
  selectClick(clickComputer: computer) {

    console.log(clickComputer)
    this.selectedComputers.push(clickComputer)
    this.selectedPcOutput.emit(this.selectedComputers)


  }




}
