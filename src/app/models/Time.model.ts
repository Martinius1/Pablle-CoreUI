import {configuration} from "./configuration.model";

export class times{
  public id: number = 0;
  public iD_Config: number = 0;
  public cron: string = '';

  public configuration: configuration  = new configuration();
}
