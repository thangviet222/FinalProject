import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarMonthViewDay, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEventComponent } from '../add-event/add-event.component';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
const fakebackEndLeave: any = [
  {
    id: "1",
    emp_id: "SE6662",
    emp_name: "",
    leave_type: "1",
    date_applied: new Date(),
    from_date: new Date(2018, 10, 13),
    to_date: new Date(2018, 10, 15),
    status: "1"
  },
  {
    id: "1",
    emp_id: "SE6662",
    emp_name: "Tran Dang Hung",
    leave_type: "1",
    date_applied: new Date(),
    from_date: new Date(2018, 10, 13),
    to_date: new Date(2018, 10, 15),
    status: "2"
  },
  {
    id: "2",
    emp_id: "SE4662",
    emp_name: "Tran Dang",
    leave_type: "2",
    date_applied: new Date(),
    from_date: new Date(2018, 10, 9),
    to_date: new Date(2018, 10, 14),
    status: "1"
  },
  {
    id: "3",
    emp_id: "SE6562",
    emp_name: "",
    leave_type: "1",
    date_applied: new Date(),
    from_date: new Date(2018, 10, 23),
    to_date: new Date(2018, 10, 25),
    status: "3"
  },
  {
    id: "4",
    emp_id: "SE6262",
    emp_name: "",
    leave_type: "3",
    date_applied: new Date(),
    from_date: new Date(2018, 10, 3),
    to_date: new Date(2018, 10, 15),
    status: "2"
  },
]
const fakeBackendEvent: any = [
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: new Date(2018, 10, 13),
    toDate: new Date(2018, 10, 13),
    isRecurring: false,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: new Date(2018, 11, 9),
    toDate: new Date(2018, 11, 10),
    isRecurring: true,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 3,
    fromDate: new Date(2018, 11, 13),
    toDate: new Date(2018, 11, 16),
    isRecurring: true,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: new Date(2018, 11, 3),
    toDate: new Date(2018, 11, 13),
    isRecurring: true,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: new Date(2018, 11, 13),
    toDate: new Date(2018, 11, 13),
    isRecurring: true,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: new Date(2018, 11, 3),
    toDate: new Date(2018, 11, 5),
    isRecurring: true,
    createBy: 'Hung',
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: new Date(2018, 11, 13),
    toDate: new Date(2018, 11, 15),
    isRecurring: true,
    createBy: 'Hung',
  },
]

@Component({
  selector: 'app-month-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css'],
})
export class MonthViewComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  events: CalendarEvent[] = [];
  eventsCurrentDay:CalendarEvent[] = [];
  selectedIndex: number = 0;
  currentYear: number;
  currentMonth: number;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
  listMonth: string[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  listYear: number[];

  styleBox = {
    'styleBox':true,
  }
  
  getEvents() {
    for (var value of fakeBackendEvent) {
      this.events.push({
        title: value.eventTitle,
        start: value.fromDate,
        end: value.toDate,
        meta: {
          type: 'events'
        }
      });
    }
  };

  getLeaveList() {
    for (var value of fakebackEndLeave) {
      var metaType;
      if (value.status === '1') {
        metaType = 'leave1';
      } else if (value.status === '2') {
        metaType = 'leave2';
      } else if(value.status === '3') {
        metaType = 'leave3';
      }
      this.events.push({
        id: "1",
        title: value.emp_name + " " + value.emp_id + " " + value.leave_type,
        start: value.from_date,
        end: value.to_date,
        meta: {
          type: metaType,
        }
      })
    }
  }

  testEvent(day) {
    console.log(day.eventGroups);
    console.log("Test");
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(cell => {
      const groups: any = {};
      cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
        groups[event.meta.type] = groups[event.meta.type] || [];
        groups[event.meta.type].push(event);
      });
      cell['eventGroups'] = Object.entries(groups);
    });
  }
  addNewEvents() {
    this.dialog.open(AddEventComponent, {
      width: '500px',
      height: 'auto'
    });
  }
  previousMonth() {
    this.currentMonth = this.currentMonth - 1;
    this.dateChange();
  }
  nextMonth() {
    this.currentMonth = this.currentMonth + 1;
    this.dateChange();
  }
  previousYear() {
    this.currentYear = this.currentYear - 1
    this.backForwardYear();
    this.dateChange();
  }
  nextYear() {
    this.currentYear = this.currentYear + 1
    this.backForwardYear();
    this.dateChange();
  }
  ngOnInit() {
    var date = new Date();
    this.currentMonth = date.getMonth();
    var dateInt = date.getFullYear();
    this.currentYear = dateInt;
    this.backForwardYear();
    this.getEvents();
    this.getLeaveList();
    console.log(this.events);
  }
  dateChange() {
    this.viewDate = new Date(this.currentYear, this.currentMonth);
  }
  clickMoth(index) {
    this.currentMonth = parseInt(index);
    console.log(this.currentMonth)
    this.dateChange();
  }
  clickYear(index) {
    this.currentYear = this.listYear[index];
    this.backForwardYear();
    this.dateChange();
  }
  backForwardYear() {
    this.listYear = [this.currentYear - 2, this.currentYear - 1, this.currentYear, this.currentYear + 1, this.currentYear + 2];
  }
  constructor(
    private modal: NgbModal,
    private dialog: MatDialog
  ) { }

  selectTab(a): void {
    this.selectedIndex = a.index;
    console.log(this.selectedIndex);
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if(events.length > 0){
        this.selectedIndex = 1;
      }
    }
    this.eventsCurrentDay = events;
    console.log(events);
  }




  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];


  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];



  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd
  // }: CalendarEventTimesChangedEvent): void {
  //   event.start = newStart;
  //   event.end = newEnd;
  //   this.handleEvent('Dropped or resized', event);
  //   this.refresh.next();
  // }

  // handleEvent(action: string, event: CalendarEvent): void {
  //   this.modalData = { event, action };
  //   this.modal.open(this.modalContent, { size: 'lg' });
  // }

  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }

}
