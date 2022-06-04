import {reports} from "./Report.model";
import {computer} from "./computer.model";
import {configuration} from "./configuration.model";

export class configurationAssignments{
  public id: number = 0;
  public computerId: number = 0;
  public configId: number  = 0;

  public reports: reports [] = [];
  public computer: computer = new computer();
  public configuration: configuration = new configuration();
}
