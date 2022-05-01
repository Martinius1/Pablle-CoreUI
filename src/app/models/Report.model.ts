import {ConfigurationAssignments} from "./ConfigurationAssignments.model";

export class Report{
  public id: number = 0;
  public ID_CA: number = 0;
  public Date: string = '';
  public Result: string = '';

  public configurationAssignments: ConfigurationAssignments = new ConfigurationAssignments();
}
