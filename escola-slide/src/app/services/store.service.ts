import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { StoreItem } from 'src/app/models/store-item.model';
import { catchError } from 'rxjs/internal/operators/catchError';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private JSONBIN_ITENS_STORE = '615cfead9548541c29be989b';

  constructor(
    private http: HttpClient) { }

  createHeaders() {

    return new HttpHeaders({

      'X-Master-Key': environment.API_SECRET_KEY
    });
  }

  getItensStoreList(): Promise<StoreItem[]> {

    const headers = this.createHeaders();

    const url = environment.COURSE_BASE_URL + this.JSONBIN_ITENS_STORE + environment.COURSE_API_VERSION;

    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(
          this.handleError<StoreItem[]>('getItensStoreList', [])
        ),
        take(1)
      ).toPromise().then(result => {

        if (result && result.record) {

          return result.record as StoreItem[];
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
