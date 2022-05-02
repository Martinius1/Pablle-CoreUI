import {sources} from "./source.model";
import {Destination} from "./destination.model";
import {configurationAsigment} from "./ConfigurationAssignments.model";
import {times} from "./Time.model";
import {ConfigurationGroup} from "./ConfigurationGroup.model";


export class configuration  {
  public id: number = 0;
  public name: string = '';
  public backup_Type: string = '';
  public rollover: number = 0;
  public max_Package_Count: number = 0;
  public zip: number = 0;




  public sources: sources [] = [];
  public destinations: Destination [] = [];
  public configurationAsigment: configurationAsigment [] = [];
  public times: times [] = [];
  public configurationGroups: ConfigurationGroup [] = [];
}
