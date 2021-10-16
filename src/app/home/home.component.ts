import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from "../api-requests.service";
import {ActivatedRoute, Router} from "@angular/router";
import { SchooolList } from '../schools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public db:ApiRequestsService,
    public route: ActivatedRoute,
    private router:Router
  ) { }

  columns = ['ID', 'Schoool Name', 'N° Registry', 'Address', 'Telephone', 'Zone', 'Up since', 'Director'];
  index = ['id', 'school_name', 's_registry', 'school_address', 'telephone', 'school_zone', 'created_at', 'director'];
  schools: SchooolList[] = [];

  navigateNew() {
    this.router.navigateByUrl('/schools/new');
  }
  navigateDelete() {
    this.router.navigateByUrl('/schools/delete');
  }

  ngOnInit(): void {
    this.db.getSchools().subscribe((res) => {
        this.schools = res;
      },
      (error) => console.error(error)
    );
  }

}
