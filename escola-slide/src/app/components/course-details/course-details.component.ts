import { Component, Input, OnInit } from '@angular/core';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() isReadOnly = true;

  private _course!: Course;

  constructor(
      private coursesService: CoursesService,
      private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if (this.route.snapshot.params && this.route.snapshot.params.course) {

      this.coursesService.getCourseDetails(this.route.snapshot.params.course)
        .then((course: Course) => {

          this._course = course;
        });
    }
  }

  get course(): Course {

    return this._course;
  }

  courseSignin(course: Course) {

    if (!course.signed) {

      course.signed  = true;
    }
  }
}
