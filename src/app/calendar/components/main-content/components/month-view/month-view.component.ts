import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarMonthViewDay, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEventComponent } from '../add-event/add-event.component';

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
const fakeBackend: any = [
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 3,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 2,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
  },
  {
    id: 1,
    eventTitle: 'Meet Company',
    eventTypeID: 1,
    fromDate: '10-10-2018',
    toDate: '11-10-2018',
    isRecurring: true,
    createBy: 'Hung',
    createAt: '10-10-2018',
    updateAt: '10-10-2018'
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
  selectedIndex: number = 0;
  view: string = 'month';
  currentYear: number;
  currentMonth: number;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
  listMonth: string[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  listYear: number[];
  addNewEvents() {
    this.dialog.open(AddEventComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
  previousMonth(){
    this.currentMonth = this.currentMonth - 1;
    this.dateChange();
  }
  nextMonth(){
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
  }
  dateChange() {
    this.viewDate = new Date(this.currentYear, this.currentMonth);
  }
  //Note: Plus one when Add event to DB. +1
  clickMoth(index) {
    this.currentMonth = parseInt(index);
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
      if (events.length > 0) {
        this.selectedIndex = 1;
      }
      
    }
  }

  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      meta: {
        type: 'warning'
      }
    },
    {
      title: 'Event 2',
      color: colors.yellow,
      start: new Date(),
      meta: {
        type: 'warning'
      }
    },
    {
      title: 'Event 3',
      color: colors.blue,
      start: new Date(),
      meta: {
        type: 'info'
      }
    },
    {
      title: 'Event 4',
      color: colors.red,
      start: new Date(),
      end: new Date(2018, 9, 13),
      meta: {
        type: 'danger'
      }
    },
  ];

  testEvent(groups) {
    console.log(groups);
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
