import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from 'src/app/api-requests.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponentP implements OnInit {
  public m_id;

  constructor(
    public db:ApiRequestsService,
    private  router: Router,
  ) { }

  deletePersonnel(id){
    let dPersonnel = {
      "idP": id
    }

    this.db.deletePersonnel(dPersonnel).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
