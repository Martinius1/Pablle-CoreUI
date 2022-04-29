import {GroupComputer} from "./GroupComputer.model";
import {ConfigurationGroup} from "./ConfigurationGroup.model";

export class Group {
  public id: number = 0;
  public name: string = '';
  public description: string = '';

  GroupComputer: GroupComputer[] = [];
  ConfigurationGroup: ConfigurationGroup = new ConfigurationGroup();
}
