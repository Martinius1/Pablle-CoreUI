import { Injectable } from '@angular/core';
import {Report} from "../models/Report.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<Report[]> {
    return this.http.get<Report[]>(environment.api + '/api/Report/', this.options);
  }

  public findById(id: number): Observable<Report> {
    return this.http.get<Report>(environment.api + '/api/Report/' + id, this.options);
  }

  public save(report: Report): Observable<Report> {
    if (report.id) {
      return this.http.put<Report>(environment.api + '/api/Report/' + report.id, report, this.options);

    } else {
      return this.http.post<Report>(environment.api + '/api/Report/', report, this.options);
    }
  }
}
