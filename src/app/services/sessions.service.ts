import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  public token: string;

  constructor(private http: HttpClient) {
    this.token = this.load();
  }


  public login(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(environment.api + '/api/sessions', credentials).pipe(
      tap((value: any) => this.save(value)),
      map(() => true),
      catchError(err => {
        if (err.status !== 401)
          throw new Error(err);

        return of(false);
      })
    );
  }

  public save(token: string): void {
    this.token = token;
    sessionStorage.setItem('token', token);
  }

  public load(): string {
    return sessionStorage.getItem('token') || '';
  }
}
