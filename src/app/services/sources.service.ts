import { Injectable } from '@angular/core';
import {sources} from "../models/source.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class SourcesService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<sources[]> {
    return this.http.get<sources[]>(environment.api + '/api/sources/', this.options);
  }

  public findById(id: number): Observable<sources> {
    return this.http.get<sources>(environment.api + '/api/sources/' + id, this.options);
  }

  public save(source: sources): Observable<sources> {
    if (source.id) {
      return this.http.put<sources>(environment.api + '/api/sources/' + source.id, source, this.options);

    } else {
      return this.http.post<sources>(environment.api + '/api/sources/', source, this.options);
    }
  }
}
