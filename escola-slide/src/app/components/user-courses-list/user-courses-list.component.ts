import { Component, Input, OnInit } from '@angular/core';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './user-courses-list.component.html',
  styleUrls: ['./user-courses-list.component.scss']
})
export class UserCoursesListComponent implements OnInit {

  @Input() isReadOnly = true;

  private _coursesList: Course[];

  private _selectorValue: number;
  private _selectorStep: number;
  private _selectorMax: number;
  private _selectorThumbLabel: boolean;

  constructor(private coursesService: CoursesService) {

    this._coursesList = [];

    this._selectorValue = 0;
    this._selectorStep = 0.1;
    this._selectorMax = 100;
    this._selectorThumbLabel = true;
  }

  ngOnInit(): void {

    this.coursesService.getUserCoursesList()
      .then((list: any) => {

        if (list) {

          this._coursesList = list;
        }
      });
  }

  valorProgressBarCourse(course: Course) {

    if (course.status) {

      if (!course.status.labelWatchedHours) {

        course.status.labelWatchedHours = course.status.watchedHours / course.status.totalHours * 100
      }

      return course.status.labelWatchedHours;
    }

    return 0;
  }

  getClassesString(course: Course) {

    if (course.status) {

      if (!course.status.labelAttempedClasses) {

        const stringFinal = 'Aulas Completas: ';
        course.status.labelAttempedClasses = stringFinal + course.status.attempedClasses + ' de ' + course.status.totalClasses;
      }

      return course.status.labelAttempedClasses;
    }

    return '';
  }

  get coursesList() {

    return this._coursesList;
  }

  get selectorStep() {

    return this._selectorStep;
  }

  get selectorThumbLabel() {

    return this._selectorThumbLabel;
  }

  get selectorMax() {

    return this._selectorMax;
  }

  get selectorValue() {

    return this._selectorValue;
  }

  set selectorValue(selectorValue) {

    this._selectorValue = selectorValue;
  }
}
