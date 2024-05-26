import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { CourseLeason } from 'src/app/models/course-leason.model';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-user-course-details',
  templateUrl: './user-course-details.component.html',
  styleUrls: ['./user-course-details.component.scss']
})
export class UserCourseDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe') iframe: ElementRef | undefined;

  private _course!: Course;

  private _currentLeason!: CourseLeason;
  private _currentLeasonIndex: number;

  private _urlSafe!: SafeResourceUrl;

  private _ytVideoId: string;

  constructor(
      private sanitizer: DomSanitizer,
      private coursesService: CoursesService,
      private route: ActivatedRoute) {

    this._ytVideoId = '';
    this._currentLeasonIndex = 0;

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    document.body.appendChild(tag);
  }

  ngOnInit(): void {

    if (this.route.snapshot.params && this.route.snapshot.params.course) {

      this.coursesService.getUserCourseDetails(this.route.snapshot.params.course)
        .then((course: Course) => {

          this._course = course;

          if (course.leasons && course.leasons.length) {

            this._currentLeason = course.leasons[0];
            this._currentLeasonIndex = 0;

            if (this._currentLeason.url) {

              this.setUrlToIframe(this._currentLeason.url);
            }
          }
        });
    }
  }

  ngAfterViewInit() {

  }

  setUrlToIframe(url?: string) {

    if (this.iframe && url) {

      this._urlSafe = this.sanitizer.bypassSecurityTrustUrl(url);
      // this.iframe.nativeElement.offsetHeight

      // this.iframe.nativeElement.setAttribute('src', this._urlSafe);
    }

    this.changeYouTubeUrl(url);
  }

  get urlSafe() {

    return this._urlSafe;
  }

  get course() {

    return this._course;
  }

  get currentLeason(): CourseLeason {

    return this._currentLeason
  }

  set currentLeason(leason: CourseLeason) {

    this._currentLeason = leason;

    if (this._currentLeason.url) {

      this.setUrlToIframe(this._currentLeason.url);
    }
  }

  get ytVideoId() {

    return this._ytVideoId;
  }

  watchCourseLeason(clickedClass: CourseLeason) {

    this.currentLeason = clickedClass;

    this.setUrlToIframe(clickedClass.url);
  }

  changeYouTubeUrl(url?: string) {

    this._ytVideoId = this.getVideoId(url);
  }

  getVideoId(url = ''): string {

    let videoId = url;

    const indexBegin = videoId.indexOf('v=');
    if (indexBegin > -1) {

      videoId = videoId.substr(indexBegin + 2);

      let indexEnd = videoId.indexOf('&');
      if (indexEnd === -1) {

        indexEnd = videoId.length;
      }

      videoId = videoId.substring(0 , indexEnd);
    }

    return videoId ? videoId : '';
  }

  completeClass(leason: CourseLeason) {

    const nextleason =  this.getNextLeason(leason, true);
    if (nextleason) {

      this.currentLeason = nextleason;

    }
  }

  getNextLeason(leason: CourseLeason, completeLeason = true) {

    if (this._course.leasons) {

      const vectorLessonIndex = this._currentLeasonIndex; // this._course.leasons?.findIndex(leason => leason);
      if (vectorLessonIndex > -1) {

        if (completeLeason) {

          leason.completed = true;
          this._course.leasons[vectorLessonIndex].completed = true;
        }

        if (vectorLessonIndex + 1 < this._course.leasons.length) {

          this._currentLeasonIndex = vectorLessonIndex + 1;
          return this._course.leasons[this._currentLeasonIndex];
        }
      }

      this._currentLeasonIndex = this._course.leasons.length - 1;
      return this._course.leasons[this._currentLeasonIndex];
    }

    return undefined;
  }
}
