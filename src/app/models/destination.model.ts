import {configuration} from "./configuration.model";


export class Destination {
  public id: number = 0;
  public iD_Config: number = 0;
  public path: string = '';

  public configuration: configuration = new configuration();
}
