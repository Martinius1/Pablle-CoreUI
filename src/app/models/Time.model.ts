import {Configuration} from "./configuration.model";

export class Time{
  public id: number = 0;
  public idConfig: number = 0;
  public Cron: string = '';

  public configurations: Configuration  = new Configuration();
}
