import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionsService } from "./services/sessions.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _sessionService: SessionsService,
              private _router: Router) { }

  canActivate(): boolean {
    if (this._sessionService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}
