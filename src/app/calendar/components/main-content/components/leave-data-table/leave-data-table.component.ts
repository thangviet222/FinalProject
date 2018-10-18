import { Component, OnInit } from '@angular/core';
import { EventsSerivceService } from '../../../../../service/EventsSerive/events-serivce.service';
import { ApplyLeave } from 'src/app/model/applyLeave';
import { Event } from 'src/app/model/Event';

import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
const fakeBackendLeave: any = [
  {
    appliedOn: new Date('7 / 5 / 2018').toLocaleDateString(),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date('5 / 5 / 2017').toLocaleDateString(),
    to_date: new Date('7 / 5 / 2017').toLocaleDateString(),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date('7 / 5 / 2018').toLocaleDateString(),
    empName: 'Thang',
    empID: 'SE62532',
    leaveType: 'Media',
    from_date: new Date('5 / 5 / 2017').toLocaleDateString(),
    to_date: new Date('7 / 5 / 2017').toLocaleDateString(),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date('7 / 5 / 2018').toLocaleDateString(),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date('5 / 5 / 2017').toLocaleDateString(),
    to_date: new Date('7 / 5 / 2017').toLocaleDateString(),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date('7 / 5 / 2018').toLocaleDateString(),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date('5 / 5 / 2017').toLocaleDateString(),
    to_date: new Date('7 / 5 / 2017').toLocaleDateString(),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date('7 / 5 / 2018').toLocaleDateString(),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date('5 / 5 / 2017').toLocaleDateString(),
    to_date: new Date('7 / 5 / 2017').toLocaleDateString(),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
]
@Component({
  selector: 'app-leave-data-table',
  templateUrl: './leave-data-table.component.html',
  styleUrls: ['./leave-data-table.component.css']
})

export class LeaveDataTableComponent implements OnInit {
  listLeave: ApplyLeave[] = [];
  listEvents: any;
  
  displayedColumns: any = [];
  fakeDataEvents:Event;
  dataSourceArray1 = new MatTableDataSource();
  constructor(
    private _eventSerive: EventsSerivceService
  ) { }
  ngOnInit() {
    // id:number;
    // event_title: string;
    // event_type_id: number;
    // from_date: Date;
    // to_date: Date;
    // is_recurring: string;
    // created_by: string;
    // created_at: Date;
    // updated_at: Date;
    // remarks?: string;
    this.getAllListLeave();
    this.listEvents = this._eventSerive.getAllEvents();
    this.addEventOneTimes();
    this.createApplyLeave();
    console.log(this.listEvents);
  }
  // This is get all list events
  getAllListEvents() {
    return this._eventSerive.getAllEvents().subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    )
  }

  // This is add one times
  addEventOneTimes(){
    return this._eventSerive.addEventOneTimes().subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  // This is create apply leave
  createApplyLeave(){
    return this._eventSerive.createApplyLeave().subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  // This is get all list apply leave
  getAllListLeave() {
    return this._eventSerive.getApplyLeaveData().subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.listLeave = data;
      },
      error => {
        console.log("Error", error);
      }
    )
  };
}
