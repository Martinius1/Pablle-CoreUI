import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {Observable} from "rxjs";
import {Computer} from "../models/computer.model";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PcService{

  constructor(private http: HttpClient,
              private  sessions: SessionsService) {}

  public get options(): {headers: HttpHeaders}{
    return {
      headers: new HttpHeaders({'Authorization':'Bearer ' + this.sessions.token})
    }
  }

  public findAll(): Observable<Computer[]>{
    return  this.http.get<Computer[]>(environment.api + '/api/Computer',this.options);
  }
}
