import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApplyLeave } from '../../model/applyLeave';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  private _applyleave: BehaviorSubject<ApplyLeave[]>;

  private dataStore: {
    applyLeave: ApplyLeave[]
  }
  get apply_leave(): Observable<ApplyLeave[]> {
    return this._applyleave.asObservable();
  }
  constructor(private http: HttpClient) {
    this.dataStore = { applyLeave: [] }
    this._applyleave = new BehaviorSubject<ApplyLeave[]>([]);
  }
  addApplyLeave(applyLeave: ApplyLeave) {
    const data = JSON.stringify(applyLeave)
    this.http.post("http://127.0.0.1:3000/customers",
      {
        data
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
  getApllyLeave() {
    const usersUrl = 'http://192.168.1.104:8000/api/leave_request';
    return this.http.get<ApplyLeave[]>(usersUrl).subscribe(
      data => {
        // console.log(data['data']);
        this.dataStore.applyLeave = data['data']
        this._applyleave.next(Object.assign({}, this.dataStore).applyLeave);
      }, error => {
        console.log(error)
      }
    )
  }
  getFakeAPI() {
   return this.http.post("https://app.fakejson.com/q",
      {

        "token": "2bi-NDO2lbsgJUzYLZoHqQ",
        "data": {
          "success": true,
          "data": [
            {
              "id": 1,
              "emp_id": "SE1111",
              "leave_type": 1,
              "employee_name": "Nguyen Viet Thang",
              "date_applied": 3,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-15 09:30:00",
              "leave_to_date": "2018-10-18 10:30:00",
              "leave_status": 0,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 2,
              "emp_id": "SE1112",
              "leave_type": 2,
              "employee_name": "Tran Dang Hung",
              "date_applied": 10,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-15 09:30:00",
              "leave_to_date": "2018-10-26 10:30:00",
              "leave_status": 2,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 3,
              "emp_id": "SE1113",
              "leave_type": 3,
              "employee_name": "Ngo Thuc Thien Binh",
              "date_applied": 3,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-16 09:30:00",
              "leave_to_date": "2018-10-19 10:30:00",
              "leave_status": 2,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 4,
              "emp_id": "SE1114",
              "leave_type": 1,
              "employee_name": "Hoang Nhut Vu",
              "date_applied": 3,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-15 09:30:00",
              "leave_to_date": "2018-10-18 10:30:00",
              "leave_status": 2,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 5,
              "emp_id": "SE1115",
              "leave_type": 4,
              "employee_name": "Nguyen Hoc Huy",
              "date_applied": 3,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-15 09:30:00",
              "leave_to_date": "2018-10-18 10:30:00",
              "leave_status": 2,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 7,
              "emp_id": "SE1117",
              "leave_type": 1,
              "employee_name": "Nguyen Trung Tin",
              "date_applied": 3,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-15 09:30:00",
              "leave_to_date": "2018-10-18 10:30:00",
              "leave_status": 0,
              "created_at": "2018-10-17 06:19:56"
            },
            {
              "id": 8,
              "emp_id": "SE1118",
              "leave_type": 3,
              "employee_name": "Nguyen Phuoc Vinh Loc",
              "date_applied": 4,
              "applied_by": "",
              "leave_from_date": "2018-10-16 09:45:00",
              "leave_to_date": "2018-10-20 09:50:00",
              "leave_status": 1,
              "created_at": "2018-10-18 00:35:17"
            },
            {
              "id": 20,
              "emp_id": "SE1111",
              "leave_type": 1,
              "employee_name": "Nguyen Viet Thang",
              "date_applied": 2,
              "applied_by": "Jason Ngo",
              "leave_from_date": "2018-10-18 09:30:00",
              "leave_to_date": "2018-10-20 10:30:00",
              "leave_status": 0,
              "created_at": "2018-10-18 12:58:02"
            }
          ],
          "status": "1",
          "message": "Leave request list retrieved successfully."

        }

      })
      .subscribe(
        data => {
          this.dataStore.applyLeave = data['data']
          this._applyleave.next(Object.assign({}, this.dataStore).applyLeave);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
