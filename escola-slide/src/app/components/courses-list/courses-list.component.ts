import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() isReadOnly = true;

  private _coursesList: Course[];

  private _chipsSelectable: boolean;
  private _chipsRemovable: boolean;
  private _chipsMultiple: boolean;

  constructor(private coursesService: CoursesService) {

    this._coursesList = [];

    this._chipsSelectable = false;
    this._chipsRemovable = false;
    this._chipsMultiple = true;
  }

  ngOnInit(): void {

    this.coursesService.getCoursesList()
      .then((list: any) => {

        if (list) {

          this._coursesList = list;
        }
      });
  }

  get chipsSelectable() {

    return this._chipsSelectable;
  }

  get chipsRemovable() {

    return this._chipsRemovable;
  }

  get chipsMultiple() {

    return this._chipsMultiple;
  }

  get coursesList() {

    return this._coursesList;
  }
}
