import {Configuration} from "./configuration.model";


export class Destination {
  public id: number = 0;
  public idConfig: number = 0;
  public location: string = '';

  Configuration: Configuration = new Configuration();
}
