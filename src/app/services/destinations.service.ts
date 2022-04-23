import { Injectable } from '@angular/core';
import {Destination} from "../models/destination.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(environment.api + '/api/destinations/', this.options);
  }

  public findById(id: number): Observable<Destination> {
    return this.http.get<Destination>(environment.api + '/api/destinations/' + id, this.options);
  }

  public save(destination: Destination): Observable<Destination> {
    if (destination.id) {
      return this.http.put<Destination>(environment.api + '/api/destinations/' + destination.id, destination, this.options);

    } else {
      return this.http.post<Destination>(environment.api + '/api/destinations/', destination, this.options);
    }
  }
}
