import { Component, Input, OnInit } from '@angular/core';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() isReadOnly = true;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {

    this.coursesService.getCourseDetails('courseId')
      .then((course: Course) => {

        console.log(course);
      });
  }

}
