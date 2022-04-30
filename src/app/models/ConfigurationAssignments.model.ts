import {Report} from "./Report.model";
import {Computer} from "./computer.model";
import {Configuration} from "./configuration.model";

export class ConfigurationAssignments{
  public id: number = 0;
  public ComputerId: number = 0;
  public ConfigId: number  = 0;

  Report: Report [] = [];
  Computer: Computer = new Computer();
  Configuration: Configuration = new Configuration();
}
