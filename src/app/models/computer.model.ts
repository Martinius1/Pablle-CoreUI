import {GroupComputer} from "./GroupComputer.model";
import {ConfigurationAssignments} from "./ConfigurationAssignments.model";

export class Computer {
  public id: number = 0;
  public name: string = '';
  public ip: string = '';
  public mac: string = '';
  public allowed: boolean = false;

  public groupComputers: GroupComputer [] = [];
  public configurationAssignments: ConfigurationAssignments[] = [];
}
