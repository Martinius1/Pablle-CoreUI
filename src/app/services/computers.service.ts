import { Injectable } from '@angular/core';
import {computer} from "../models/computer.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";
import {groupComputers} from "../models/GroupComputer.model";
import {group} from "../models/group.model";

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<computer[]> {
    return this.http.get<computer[]>(environment.api + '/api/Computer/', this.options);
  }

  public findById(id: number): Observable<computer> {
    return this.http.get<computer>(environment.api + '/api/Computer/' + id, this.options);
  }
  public delete(id: number): void {
    this.http.delete<computer>(environment.api + '/api/Computer/' + id, this.options).subscribe();
  }
  public addgroup(idpc:number,idgroup:number):Observable<groupComputers>
  {
    return this.http.post<groupComputers>(environment.api + '/addgroup/'+idpc, idgroup, this.options);
  }

  public save(computer: computer): Observable<computer> {
    if (computer.id) {
      console.log(computer.id);
      console.log(computer.name);
      return this.http.put<computer>(environment.api + '/api/Computer/' + computer.id, computer, this.options);

    } else {
      return this.http.post<computer>(environment.api + '/api/Computer/', computer, this.options);
    }
  }
}

