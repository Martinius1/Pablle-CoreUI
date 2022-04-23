    import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from '../../../services/sessions.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = {} as FormGroup

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
        this.router.navigate([ '/dashboard' ]);
      }
    });
  }

}
