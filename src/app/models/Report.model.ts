import {configurationAsigment} from "./ConfigurationAssignments.model";

export class reports{
  public id: number = 0;
  public iD_CA: number = 0;
  public date: string = '';
  public result: string = '';

  public configurationAsigment: configurationAsigment = new configurationAsigment();
}
