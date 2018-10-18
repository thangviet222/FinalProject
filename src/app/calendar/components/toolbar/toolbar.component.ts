import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEventComponent } from '../add-event/add-event.component';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import { AddEventRecurComponent } from '../add-event-recur/add-event-recur.component';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }
  addNewEvents() {
    this.matDialog.open(AddEventComponent, {

    });
  }
  addApplyLeave() {
    this.matDialog.open(ApplyLeaveComponent, {

    });
  }
  addNewEventRecur(): void {
    this.matDialog.open(AddEventRecurComponent, {
      panelClass: 'custom-modalbox',
    });
  }

}
