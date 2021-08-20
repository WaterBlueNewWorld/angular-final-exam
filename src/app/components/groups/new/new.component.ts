import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/api-requests.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public g_name;

  constructor(
    public db:ApiRequestsService
  ) { }

  insertGroup(name){
    let nGroup = {
      "name": name
    }

    this.db.newGroup(nGroup).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
