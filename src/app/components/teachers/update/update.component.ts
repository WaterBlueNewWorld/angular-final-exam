import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from "../../../api-requests.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponentT implements OnInit {
  public idT;
  public name;
  public address;
  public telephone;
  public id_group;

  constructor(
    public db:ApiRequestsService
  ) { }

  updateTeacher(id, name, address, tel, id_group){
    let uTeacher = {
      "id": id,
      "name": name,
      "address": address,
      "telephone": tel,
      "id_group": id_group
    }

    this.db.updateTeacher(uTeacher).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
