import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarAppComponent } from './calendar-app.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddEventComponent } from './components/main-content/components/add-event/add-event.component'
import { from } from 'rxjs';
import { ApplyLeaveComponent } from './components/main-content/components/apply-leave/apply-leave.component';


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
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarAppComponent,
    SideNavComponent,
    ToolbarComponent,
    ],
  

})
export class CalendarModule { }
