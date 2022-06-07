import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from "../../services/sessions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements  OnInit {

  form: FormGroup = {} as FormGroup
  public show:Boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: SessionsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  public submit(): void {
    this.service.login(this.form.value).subscribe(result => {
      if (result) {
        this.router.navigate([ '/' ]);
      }else{
        this.show = true;
      }
    });
  }

}
