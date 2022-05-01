import {Group} from "./group.model";
import {Computer} from "./computer.model";

export class GroupComputer {
  public GroupId: number = 0;
  public ComputerId: number = 0;

  public groups: Group = new Group();
  public computers: Computer = new Computer();
}
