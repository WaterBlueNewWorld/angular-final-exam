import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from "../../api-requests.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponentS implements OnInit {
  public idS;

  constructor(
    public db:ApiRequestsService
  ) { }

  deleteSchool(id){
    let dSchool = {
      "idS": id
    }

    this.db.deleteSchool(dSchool).subscribe((res => {
      console.log(res);
    }));
  }

  ngOnInit(): void {
  }

}
