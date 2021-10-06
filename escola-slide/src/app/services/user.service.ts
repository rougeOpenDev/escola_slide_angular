import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { take } from 'rxjs/operators';import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private JSONBIN_USER_DASH = '615d0c894a82881d6c5b9cd3';

  constructor(
    private http: HttpClient) { }

  createHeaders() {

    return new HttpHeaders({

      'X-Master-Key': environment.API_SECRET_KEY
    });
  }

  getUserDashData(): Promise<User> {

    const headers = this.createHeaders();

    const url = environment.COURSE_BASE_URL + this.JSONBIN_USER_DASH + environment.COURSE_API_VERSION;

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<User>('getUserDashData', undefined)
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as User;
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
