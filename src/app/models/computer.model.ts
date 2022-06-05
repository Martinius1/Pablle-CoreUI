import {groupComputers} from "./GroupComputer.model";
import {configurationAssignment} from "./ConfigurationAssignments.model";

export class computer {
  public id: number = 0;
  public name: string = '';
  public ip: string = '';
  public mac: string = '';

  public allowed: boolean = false;

  public groupComputers: groupComputers [] = [];
  public configurationAssignment: configurationAssignment[] = [];
}
