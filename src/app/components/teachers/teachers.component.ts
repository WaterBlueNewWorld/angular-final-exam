import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from "../../api-requests.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public name;
  public address;
  public tel;
  public id_group;

  constructor(
    public db:ApiRequestsService
  ) { }

  insertTeacher(name, address, tel, id_group){
    let nTeacher = {
      "name": name,
      "address": address,
      "tel": tel,
      "id_group": id_group
    }

    this.db.newTeacher(nTeacher).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  mutableTeacher(id, name, address, tel, id_group){
    let mTeacher = {
      "id": id,
      "name": name,
      "address": address,
      "tel": tel,
      "id_group": id_group
    }

    this.db.updateTeacher(mTeacher).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {

  }

}
