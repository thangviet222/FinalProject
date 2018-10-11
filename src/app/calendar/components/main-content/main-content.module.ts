import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MainContentAppComponent } from './main-content-app.component';
import { Routes, RouterModule } from '@angular/router';
import { YearViewComponent } from './components/year-view/year-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';

import { CalendarModule, DateAdapter, CalendarEventAction } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '', component: MainContentAppComponent,
    children: [
      { path: '', component: YearViewComponent },
      { path: 'year', component: YearViewComponent },
      { path: 'month', component: MonthViewComponent },
      { path: 'day', component: DayViewComponent },
      { path: 'allEvents', component: ViewAllComponent },
      { path: 'addevent', component: AddEventComponent },
      { path: 'applyleave', component: ApplyLeaveComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  // {path:'**',redirectTo:''}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [
    MainContentAppComponent,
    YearViewComponent,
    MonthViewComponent,
    DayViewComponent,
    ViewAllComponent,
    ApplyLeaveComponent,
    AddEventComponent
  ],
  entryComponents:[
    AddEventComponent
  ]
 
})
export class MainContentModule { }
