import { Injectable } from '@angular/core';
import {configuration} from "../models/configuration.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";


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

  public findAll(): Observable<configuration[]> {
    return this.http.get<configuration[]>(environment.api + '/api/Configuration/', this.options);
  }

  public findById(id: number): Observable<configuration> {
    return this.http.get<configuration>(environment.api + '/api/Configuration/' + id, this.options);
  }
  public delete(id: number): void {
    this.http.delete<configuration>(environment.api + '/api/Configuration/' + id, this.options).subscribe();
  }

  public save(configuration: configuration): Observable<configuration> {
    if (configuration.id) {
      return this.http.put<configuration>(environment.api + '/api/Configuration/' + configuration.id, configuration, this.options);

    } else {
      return this.http.post<configuration>(environment.api + '/api/Configuration/', configuration, this.options);
    }
  }
}
