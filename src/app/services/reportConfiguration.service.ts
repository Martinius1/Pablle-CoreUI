import { Injectable } from '@angular/core';
import { reportConfiguration } from "../models/ReportConfiguration";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class ReportConfigurationService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }


  public findById(id: 1): Observable<reportConfiguration> {
    return this.http.get<reportConfiguration>(environment.api + '/api/Report_Config/' + id, this.options);
  }

}
