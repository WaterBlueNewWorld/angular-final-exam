import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiRequestsService } from 'src/app/api-requests.service';
import { GroupList } from 'src/app/groups';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(
    public db:ApiRequestsService,
    public route: ActivatedRoute,
    private router:Router
  ) { }

  columns = ['ID', 'Group Name', 'Created'];
  index = ['id', 'group_name', 'created_at'];

  groups: GroupList[] = [];

  navigateNew() {
    this.router.navigateByUrl('/groups/new');
  }
  navigateUpdate() {
    this.router.navigateByUrl('/groups/update');
  }
  navigateDelete() {
    this.router.navigateByUrl('/groups/delete');
  }

  ngOnInit(): void {
    this.db.getGroups().subscribe((res) => {
        this.groups = res;
      },
      (error) => console.error(error)
    );
  }

}
