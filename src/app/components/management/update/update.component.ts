import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiRequestsService} from "../../../api-requests.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponentP implements OnInit {
  public idP;
  public m_name;
  public telephone;
  public email;
  public position;
  public m_address;

  constructor(
    public db:ApiRequestsService,
    private router:Router,
  ) { }

  updatePersonnel(id, m_name, telephone, email, position, m_address) {
    let uPersonnel = {
      "idP": id,
      "name": m_name,
      "tel": telephone,
      "email": email,
      "position": position,
      "address": m_address
    }

    this.db.updatePersonnel(uPersonnel).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
