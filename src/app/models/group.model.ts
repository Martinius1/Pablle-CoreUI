import {groupComputers} from "./GroupComputer.model";
import {ConfigurationGroup} from "./ConfigurationGroup.model";

export class group {
  public id: number = 0;
  public name: string = '';
  public description: string = '';

  public groupComputers: groupComputers[] = [];
  public configurationGroups: ConfigurationGroup [] = [];
}
