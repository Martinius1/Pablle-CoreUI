import {Group} from "./group.model";
import {Computer} from "./computer.model";

export class GroupComputer {
  public GroupId: number = 0;
  public ComputerId: number = 0;

  groups: Group = new Group();
  computers: Computer = new Computer();
}
