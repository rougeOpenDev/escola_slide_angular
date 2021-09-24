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

    this.coursesService.getUserCousesList()
      .then((list: any) => {

        if (list) {

          this._coursesList = list;
        }
      });
  }

  getClassesString(course: Course) {

    if (course.status) {

      return course.status.attempedClasses + ' / ' + course.status.totalClasses;
    }

    return '0 / 0';
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
