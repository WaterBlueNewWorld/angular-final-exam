import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/api-requests.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public idG;

  constructor(
    public db:ApiRequestsService
  ) { }

  deleteGroup(id){
    let dGroup = {
      "idG": id
    }

    this.db.deleteGroup(dGroup).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
