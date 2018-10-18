import { Component, OnInit } from '@angular/core';
import { EventsSerivceService } from '../../../../../service/EventsSerive/events-serivce.service';
import { ApplyLeave } from 'src/app/model/applyLeave';
import {MatTableDataSource} from '@angular/material';
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
  displayedColumns: any = [];
  dataSourceArray1 =  new MatTableDataSource();
  constructor(
    private _eventSerive: EventsSerivceService
  ) { }
  ngOnInit() {
    //this.getAllListLeave();
  }
  
  getAllListLeave(){
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
