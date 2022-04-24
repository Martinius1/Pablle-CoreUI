import { Injectable } from '@angular/core';
import {Configuration} from "../models/configuration.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";
import {Computer} from "../models/computer.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<Configuration[]> {
    return this.http.get<Configuration[]>(environment.api + '/api/Configuration/', this.options);
  }

  public findById(id: number): Observable<Configuration> {
    return this.http.get<Configuration>(environment.api + '/api/Configuration/' + id, this.options);
  }
  public delete(id: number): void {
    this.http.delete<Configuration>(environment.api + '/api/Configuration/' + id, this.options).subscribe();
  }

  public save(configuration: Configuration): Observable<Configuration> {
    if (configuration.id) {
      return this.http.put<Configuration>(environment.api + '/api/Configuration/' + configuration.id, configuration, this.options);

    } else {
      return this.http.post<Configuration>(environment.api + '/api/Configuration/', configuration, this.options);
    }
  }
}
