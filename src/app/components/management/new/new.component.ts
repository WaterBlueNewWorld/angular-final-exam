import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiRequestsService} from "../../../api-requests.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponentP implements OnInit {
  public m_name;
  public telephone;
  public email;
  public position;
  public m_address;

  constructor(
    public db:ApiRequestsService,
    private router:Router,
  ) { }

  insertPersonnel(name, telephone, email, position, address) {
    let newPersonnel = {
      "name": name,
      "tel": telephone,
      "email": email,
      "position": position,
      "address" : address
    }

    this.db.newPersonnel(newPersonnel).subscribe((res => {
      console.log(res);
    }));
  }

  ngOnInit(): void {
  }

}
