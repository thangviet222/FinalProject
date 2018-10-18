import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ApplyLeave } from '../../model/applyLeave';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsSerivceService {
  port: string = "10.21.1.58:8000";
  urlLeaveRequest = "http://" + this.port + "/api/leave_request"
  constructor(
    private _httpClient: HttpClient
  ) { }

  getApplyLeaveData(): Observable<ApplyLeave[]> {
    return this._httpClient.get<ApplyLeave[]>(this.urlLeaveRequest)
      .pipe(map(data => data),
        catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    let errorMess = "";
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMess = 'An error occurred: ${err.error.message }';
    } else {
      errorMess = 'Server return code: ${err.status}, error message is: ${err.message}';
    }
    console.error(errorMess || err.body.error);
    return throwError(errorMess);
  }
}
