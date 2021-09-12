import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, take} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private COURSE_BASE_URL = 'https://api.jsonbin.io/v3/b/6082274da2213a0c14294edf/latest';

  constructor(
    private http: HttpClient) { }

  getCousesList(): Promise<Course[]> {

    const headers = new HttpHeaders({

      'X-Master-Key': '$2b$10$ZztOic8Zs2xHk4eCqEawROFVaxrM5xkOGI7VZS6/y0DeCjopp5scG'
    });

    return this.http.get<any>(this.COURSE_BASE_URL, { headers: headers })
      .pipe(
        catchError(
          this.handleError<Course[]>('getCousesList', [])
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
