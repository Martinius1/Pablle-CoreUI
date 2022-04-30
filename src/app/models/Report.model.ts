import {ConfigurationAssignments} from "./ConfigurationAssignments.model";

export class Report{
  public id: number = 0;
  public idCA: number = 0;
  public Date: string = '';
  public Result: string = '';

  configurationAssignments: ConfigurationAssignments = new ConfigurationAssignments();
}
