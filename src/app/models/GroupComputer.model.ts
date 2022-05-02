import {group} from "./group.model";
import {computer} from "./computer.model";

export class groupComputers {
  public groupId: number = 0;
  public computerId: number = 0;

  public group: group = new group();
  public computer: computer = new computer();
}
