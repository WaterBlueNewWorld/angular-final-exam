import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../api-requests.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public password;

  constructor(
    public db:ApiRequestsService,
    private router: Router
  ) { }

  login(user, password){
    let login = {
      "user": user,
      "pass": password,
    }
    this.db.login(login).subscribe((res => {
      if(res == true){
        this.router.navigateByUrl('/schools')
      }
    }));
  }

  ngOnInit(): void {
  }

}
