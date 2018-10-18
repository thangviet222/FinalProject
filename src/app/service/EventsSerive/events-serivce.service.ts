import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ApplyLeave } from '../../model/applyLeave';
import { Event } from '../../model/Event';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsSerivceService {
  port: string = "10.21.1.65:8000";
  urlGetallApplyLeave = "http://" + this.port + "/api/leave_request";
  urlCreateApplyLeave = "http://" + this.port + "/api/leave_request";
  urlGetAllEvents = "http://" + this.port + "/api/events";
  urlCreateEventOneTimes = "http://" + this.port + "/api/events";
  constructor(
    private _httpClient: HttpClient
  ) { }
  // get all apply leave data
  getApplyLeaveData(): Observable<ApplyLeave[]> {
    return this._httpClient.get<ApplyLeave[]>(this.urlGetallApplyLeave)
      .pipe(map(data => data),
        catchError(this.handleError));
  }
  // get all events data
  getAllEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(this.urlGetAllEvents)
      .pipe(map(data => data),
        catchError(this.handleError));
  }
  // create events one times
  addEventOneTimes(){
    return this._httpClient.post(this.urlCreateEventOneTimes,{
      "event_title": "Testing the API_HUNG",
      "event_type_id": 2,
      "from_date": '2018-10-10 11:10:10',
      "to_date": '2018-10-10 11:10:10',
      "is_recurring": 1
    })
  }
  // create apply leave
  createApplyLeave(){
    return this._httpClient.post(this.urlCreateApplyLeave,{
      "leave_status": 1,
      "emp_id": 'SE62533',
      "leave_type":3,
      "date_applied":4,
      "leave_from_date":'2018-10-10 11:10:10',
      "leave_to_date": '2018-10-14 11:10:10'
    })
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
