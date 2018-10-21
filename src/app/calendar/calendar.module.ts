import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarAppComponent } from './calendar-app.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { from } from 'rxjs';
import { AddEventRecurComponent } from './components/add-event-recur/add-event-recur.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CalendarAppComponent,
    children: [
      { path: '', loadChildren: './components/main-content/main-content.module#MainContentModule' }
    ]
  },
  { path: '', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    CalendarAppComponent,
    SideNavComponent,
    ToolbarComponent,
     AddEventComponent,
    ApplyLeaveComponent,
    AddEventRecurComponent
    ],
    entryComponents:[
      AddEventComponent,
      ApplyLeaveComponent,
      AddEventRecurComponent
    ]

})
export class CalendarModule { }
