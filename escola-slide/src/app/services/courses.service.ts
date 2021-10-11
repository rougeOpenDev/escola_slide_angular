import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, take} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private JSONBIN_COURSE_DETAIL_1 = '614e8240aa02be1d444e425d';
  private JSONBIN_COURSE_DETAIL_2 = '614e80e5aa02be1d444e41ee';

  private JSONBIN_USER_COURSE_DETAIL_2 = '614e80e5aa02be1d444e41ee';
  private JSONBIN_USER_COURSE_DETAIL_3 = '614e80e5aa02be1d444e41ee';

  private JSONBIN_USER_COURSES_LIST = '614d3c589548541c29b751dc';
  private JSONBIN_COURSES_LIST = '614d395eaa02be1d444d9685';

  constructor(
    private http: HttpClient) { }

  createHeaders() {

    return new HttpHeaders({

      'X-Master-Key': environment.API_SECRET_KEY
    });
  }

  private getCourseServiceUrl(courseId: string): string {

    let url = environment.COURSE_BASE_URL;

    if (courseId === '0001') {

      url = url + this.JSONBIN_COURSE_DETAIL_1;
    } else {

      url = url + this.JSONBIN_COURSE_DETAIL_2;
    }

    return url + environment.COURSE_API_VERSION;
  }

  private getUserCourseServiceUrl(courseId: string): string {

    let url = environment.COURSE_BASE_URL;

    if (courseId === '0003') {

      url = url + this.JSONBIN_USER_COURSE_DETAIL_3;
    } else {

      url = url + this.JSONBIN_USER_COURSE_DETAIL_2;
    }

    return url + environment.COURSE_API_VERSION;
  }

  getUserCourseDetails(courseId: string): Promise<Course> {

    const headers = this.createHeaders();

    const url = this.getUserCourseServiceUrl(courseId);

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<Course[]>('getUserCourseDetails', [])
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as Course;
        }

        throw new Error('No such element "record" on API result');
      });
  }

  getCourseDetails(courseId: string): Promise<Course> {

    const headers = this.createHeaders();

    const url = this.getCourseServiceUrl(courseId);

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<Course[]>('getCourseDetails', [])
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as Course;
        }

        throw new Error('No such element "record" on API result');
      });
  }

  getCoursesList(): Promise<Course[]> {

    const headers = this.createHeaders();

    const url = environment.COURSE_BASE_URL + this.JSONBIN_COURSES_LIST + environment.COURSE_API_VERSION;

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<Course[]>('getCoursesList', [])
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as Course[];
        }

        throw new Error('No such element "record" on API result');
      });
  }

  getUserCoursesList(): Promise<Course[]> {

    const headers = this.createHeaders();

    const url = environment.COURSE_BASE_URL + this.JSONBIN_USER_COURSES_LIST + environment.COURSE_API_VERSION;

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<Course[]>('getUserCoursesList', [])
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as Course[];
        }

        throw new Error('No such element "record" on API result');
      });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
