import { Component } from '@angular/core';
import { SessionsService } from "../../services/sessions.service";
import { navItems } from './_nav';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  public logout(): void {
    this.router.navigate(['/login'])
    this.service.logout();
  }

  constructor(
    private router: Router,
    private service: SessionsService
  ) {}
}



