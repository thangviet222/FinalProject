import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Router, NavigationExtras } from '@angular/router';
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

@Component({
  selector: 'app-year-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  currentYear: number;
  view: string = 'month';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
  listMonthName: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  listDateView: Date[];
  viewDate1: Date;
  viewDate2: Date;
  viewDate3: Date;
  viewDate4: Date;
  viewDate5: Date;
  viewDate6: Date;
  viewDate7: Date;
  viewDate8: Date;
  viewDate9: Date;
  viewDate10: Date;
  viewDate11: Date;
  viewDate12: Date;
  listYear: number[];

  constructor(
    private modal: NgbModal,
    private _router: Router
    ) { }

  initMonth() {
    this.viewDate1 = new Date();
    this.viewDate1.setMonth(0);
    this.viewDate1.setFullYear(this.currentYear);
    console.log("date1InInit:" + this.viewDate1);

    this.viewDate2 = new Date();
    this.viewDate2.setMonth(1);
    this.viewDate2.setFullYear(this.currentYear);

    this.viewDate3 = new Date();
    this.viewDate3.setMonth(2);
    this.viewDate3.setFullYear(this.currentYear);

    this.viewDate4 = new Date();
    this.viewDate4.setMonth(3);
    this.viewDate4.setFullYear(this.currentYear);

    this.viewDate5 = new Date();
    this.viewDate5.setMonth(4);
    this.viewDate5.setFullYear(this.currentYear);

    this.viewDate6 = new Date();
    this.viewDate6.setMonth(5);
    this.viewDate6.setFullYear(this.currentYear);

    this.viewDate7 = new Date();
    this.viewDate7.setMonth(6);
    this.viewDate7.setFullYear(this.currentYear);

    this.viewDate8 = new Date();
    this.viewDate8.setMonth(7);
    this.viewDate8.setFullYear(this.currentYear);

    this.viewDate9 = new Date();
    this.viewDate9.setMonth(8);
    this.viewDate9.setFullYear(this.currentYear);

    this.viewDate10 = new Date();
    this.viewDate10.setMonth(9);
    this.viewDate10.setFullYear(this.currentYear);

    this.viewDate11 = new Date();
    this.viewDate11.setMonth(10);
    this.viewDate11.setFullYear(this.currentYear);

    this.viewDate12 = new Date();
    this.viewDate12.setMonth(11);
    this.viewDate12.setFullYear(this.currentYear);

    this.listDateView = [this.viewDate1, this.viewDate2, this.viewDate3, this.viewDate4,
    this.viewDate5, this.viewDate6, this.viewDate7, this.viewDate8,
    this.viewDate9, this.viewDate10, this.viewDate11, this.viewDate12]
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
  backForwardYear() {
    this.listYear = [this.currentYear - 2, this.currentYear - 1, this.currentYear, this.currentYear + 1, this.currentYear + 2];
  }
  dateChange() {
    console.log("currentDate1:" + this.viewDate1)
    this.initMonth();
  }
  clickYear(index) {
    this.currentYear = this.listYear[index];
    this.backForwardYear();
    this.dateChange();
  }
  toDetailMonthView(index){
     let  navigationExtras: NavigationExtras = {
       queryParams:{
         "month": index,
         "year": this.currentYear
       }
     };
     this._router.navigate(['/calendar', 'month'],navigationExtras);
  }

  ngOnInit() {
    var date = new Date();
    var dateInt = date.getFullYear();
    this.currentYear = dateInt;
    this.backForwardYear();
    this.initMonth();
  }



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(this.viewDate10);
    console.log(date + "dateClicked");
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
