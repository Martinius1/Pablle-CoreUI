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


  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {
    //this.service.findAll().subscribe(data => this.computers = data.filter((value:computer)=>value.allowed));
  }
  test() {
    console.log(this.selectedComputers)
  }

  selectClick(clickComputer: computer) {
    this.removePcfromunselected(clickComputer);
    this.selectedComputers.push(clickComputer);
    this.selectedPcOutput.emit(this.selectedComputers)
  }
  unselectClick(clickComputer: computer){
    this.removePcfromselected(clickComputer);
    this.availableComputers.push(clickComputer);
    this.selectedPcOutput.emit(this.selectedComputers)
  }
  removePcfromselected(pc:computer): void
  {
    const index = this.selectedComputers.findIndex(x=>x.id == pc.id);
    if (index > -1) {
      this.selectedComputers.splice(index, 1);
    }
  }
  removePcfromunselected(pc:computer):void
  {
    const index = this.availableComputers.findIndex(x=>x.id == pc.id);
    if (index > -1) {
      this.availableComputers.splice(index, 1);
    }
  }




}
