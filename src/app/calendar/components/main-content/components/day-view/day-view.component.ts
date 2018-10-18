import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  @Input() CalendarEvents :any[];
  @Input() testNumber:number;
  constructor() { }

  ngOnInit() {
  }
  test(){
    console.log(this.CalendarEvents[1].meta.type);
  }

}
