import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/api-requests.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponentS implements OnInit {
  public s_name;
  public s_registry;
  public school_address;
  public telephone;
  public school_zone;
  public  director;

  constructor(
    public db:ApiRequestsService
  ) { }

  newSchool(name, registry, school_address, telephone, school_zone, director){
    let nSchool = {
      "school_name" : name,
      "s_registry" : registry,
      "school_address" : school_address,
      "telephone" : telephone,
      "school_zone" : school_zone,
      "director" : director,
    }

    this.db.newSchool(nSchool).subscribe((res => {
      console.log(res);
      window.history.back();
    }));
  }

  ngOnInit(): void {
  }

}
