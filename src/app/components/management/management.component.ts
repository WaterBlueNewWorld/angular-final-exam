import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiRequestsService} from "../../api-requests.service";
import {PersonnelList} from "../../personnel";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public db:ApiRequestsService
  ) { }

  columns = ['ID', 'Name', 'Telephone', 'E-mail', 'Join date', 'Position', 'Address'];
  index = ['id', 'm_name', 'telephone', 'email', 'created_at', 'position', 'm_address']

  navigateNew() {
    this.router.navigateByUrl('/management/new');
  }
  navigateUpdate() {
    this.router.navigateByUrl('/management/update');
  }
  navigateDelete() {
    this.router.navigateByUrl('/management/delete');
  }

  personnel : PersonnelList[] = [];

  ngOnInit(): void {
    this.db.getPersonnel().subscribe((res) => {
        this.personnel = res;
      },
      (error) => console.error(error)
    );
  }

}
