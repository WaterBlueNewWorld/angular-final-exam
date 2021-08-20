import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from "../../api-requests.service";
import {TeacherList} from "../../teachers";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public db:ApiRequestsService
  ) { }

  columns = ['ID', 'Teacher name', 'Address', 'Telephone', 'Group'];
  index = ['id', 'teacher_name', 'teacher_address', 'telephone', 'id_group'];

  teachers : TeacherList[] = [];

  navigateNew() {
    this.router.navigateByUrl('/teachers/new');
  }
  navigateUpdate() {
    this.router.navigateByUrl('/teachers/update');
  }
  navigateDelete() {
    this.router.navigateByUrl('/teachers/delete');
  }


  ngOnInit(): void {
    this.db.getTeachers().subscribe((res) => {
      this.teachers = res;
    },
      (error) => console.error(error)
    );
  }

}
