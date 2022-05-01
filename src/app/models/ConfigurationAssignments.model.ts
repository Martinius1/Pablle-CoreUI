import {Report} from "./Report.model";
import {Computer} from "./computer.model";
import {Configuration} from "./configuration.model";

export class ConfigurationAssignments{
  public id: number = 0;
  public ComputerId: number = 0;
  public ConfigId: number  = 0;

  public reports: Report [] = [];
  public computers: Computer = new Computer();
  public configurations: Configuration = new Configuration();
}
