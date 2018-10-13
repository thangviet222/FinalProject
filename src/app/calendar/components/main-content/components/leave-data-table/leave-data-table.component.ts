import { Component, OnInit } from '@angular/core';
const fakeBackendLeave: any = [
  {
    appliedOn: new Date(7 / 5 / 2018),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date(5 / 5 / 2017),
    to_date: new Date(7 / 5 / 2017),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date(7 / 5 / 2018),
    empName: 'Thang',
    empID: 'SE62532',
    leaveType: 'Media',
    from_date: new Date(5 / 5 / 2017),
    to_date: new Date(7 / 5 / 2017),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date(7 / 5 / 2018),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date(5 / 5 / 2017),
    to_date: new Date(7 / 5 / 2017),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date(7 / 5 / 2018),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date(5 / 5 / 2017),
    to_date: new Date(7 / 5 / 2017),
    days: 3,
    appliedBy: "Jacky Tran",
    approvalStatus: 'PENDING',
  },
  {
    appliedOn: new Date(7 / 5 / 2018),
    empName: 'Tran Dang Hung',
    empID: 'SE62533',
    leaveType: 'Annual',
    from_date: new Date(5 / 5 / 2017),
    to_date: new Date(7 / 5 / 2017),
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
  listLeave:any = [];
  constructor() { }

  ngOnInit() {
    this.listLeave = fakeBackendLeave;
  }

}
