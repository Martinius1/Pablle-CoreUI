import {Source} from "./source.model";
import {Destination} from "./destination.model";
import {ConfigurationAssignments} from "./ConfigurationAssignments.model";
import {Time} from "./Time.model";
import {ConfigurationGroup} from "./ConfigurationGroup.model";

export class Configuration {
  public id: number = 0;
  public name: string = '';
  public backupType: string = '';
  public rollover: number = 0;
  public packageCount: number = 0;
  public zip: number = 0;

  Source: Source [] = [];
  Destination: Destination [] = [];
  ConfigurationAssignments: ConfigurationAssignments [] = [];
  Time: Time [] = [];
  ConfigurationGroup: ConfigurationGroup [] = [];
}
