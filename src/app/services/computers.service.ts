import { Injectable } from '@angular/core';
import {Computer} from "../models/computer.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

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

  public findAll(): Observable<Computer[]> {
    return this.http.get<Computer[]>(environment.api + '/api/Computer/', this.options);
  }

  public findById(id: number): Observable<Computer> {
    return this.http.get<Computer>(environment.api + '/api/Computer/' + id, this.options);
  }

  public save(computer: Computer): Observable<Computer> {
    if (computer.id) {
      return this.http.put<Computer>(environment.api + '/api/Computer/' + computer.id, computer, this.options);

    } else {
      return this.http.post<Computer>(environment.api + '/api/Computer/', computer, this.options);
    }
  }
}

