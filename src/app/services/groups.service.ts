import { Injectable } from '@angular/core';
import {Group} from "../models/group.model";
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

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(environment.api + '/api/Group/', this.options);
  }

  public findById(id: number): Observable<Group> {
    return this.http.get<Group>(environment.api + '/api/Group/' + id, this.options);
  }

  public save(group: Group): Observable<Group> {
    if (group.id) {
      return this.http.put<Group>(environment.api + '/api/Group/' + group.id, group, this.options);

    } else {
      return this.http.post<Group>(environment.api + '/api/Group/', group, this.options);
    }
  }
}
