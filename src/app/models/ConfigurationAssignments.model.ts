import {Report} from "./Report.model";
import {Computer} from "./computer.model";
import {Configuration} from "./configuration.model";

export class ConfigurationAssignments{
  public id: number = 0;
  public ComputerId: number = 0;
  public ConfigId: number  = 0;

  reports: Report [] = [];
  computers: Computer = new Computer();
  configurations: Configuration = new Configuration();
}
