import { Injectable } from '@angular/core';
import {group} from "../models/group.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<group[]> {
    return this.http.get<group[]>(environment.api + '/api/Group/', this.options);
  }

  public findById(id: number): Observable<group> {
    return this.http.get<group>(environment.api + '/api/Group/' + id, this.options);
  }

  public save(group: group): Observable<group> {
    if (group.id) {
      return this.http.put<group>(environment.api + '/api/Group/' + group.id, group, this.options);

    } else {
      return this.http.post<group>(environment.api + '/api/Group/', group, this.options);
    }
  }
}
