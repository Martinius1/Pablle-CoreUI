import {configuration} from "./configuration.model";


export class Destination {
  public id: number = 0;
  public iD_Config: number = 0;
  public path: string = '';
  public ftp: number = 0;
  public username: string = '';
  public password: string = '';
  public hostname: string = '';
  public port: number = 0;


  public configuration: configuration = new configuration();
}
