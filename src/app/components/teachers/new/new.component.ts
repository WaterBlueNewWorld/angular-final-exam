import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from "../../../api-requests.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponentT implements OnInit {
  public name;
  public address;
  public telephone;
  public id_group;

  constructor(
    public db:ApiRequestsService
  ) { }

  insertTeacher(name, address, tel, id_group){
    console.log(name + " "+ address + " "+ tel + "" + id_group)
    let nTeacher = {
      "name": name,
      "address": address,
      "telephone": tel,
      "id_group": id_group
    }

    this.db.newTeacher(nTeacher).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
