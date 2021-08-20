import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/api-requests.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public idG;
  public g_name;

  constructor(
    public db:ApiRequestsService
  ) { }


  updateGroup(id, name){
    let uGroup = {
      "idG": id,
      "name": name
    }

    this.db.updateGroup(uGroup).subscribe((res => {
      console.log(res);
    }));
  }

  ngOnInit(): void {
  }

}
