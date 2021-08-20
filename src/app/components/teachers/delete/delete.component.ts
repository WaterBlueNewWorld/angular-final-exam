import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from "../../../api-requests.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponentT implements OnInit {
  public t_id;

  constructor(
    public db:ApiRequestsService
  ) { }

  deleteTeacher(idTeacher){
    console.log(idTeacher);
    let delTeacher = {
      "idT" : idTeacher
    }

    this.db.deleteTeacher(delTeacher).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
