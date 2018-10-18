import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, ValidatorFn, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-event-recur',
  templateUrl: './add-event-recur.component.html',
  styleUrls: ['./add-event-recur.component.scss']
})
export class AddEventRecurComponent implements OnInit {
  type_recur = '1';
  type_recur_month = '1';
  type_end_recur = '3';
  orderSelected = 'First';
  dayOfWeekSelected = 'Mon';
  monthSelected = 'January';

  orders: any = ['First', 'Second', 'Third', 'Fourth'];
  dayOfWeeks: any = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  months: any = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  matcher = new MyErrorStateMatcher();

  eventTypeFC = new FormControl('', Validators.required);
  eventTitleFC = new FormControl('', Validators.required);
  eventRemarkFC = new FormControl('', Validators.required);
  eventDayRecurFC = new FormControl('', Validators.required);
  eventWeekRecurFB = new FormControl('', Validators.required);
  eventMonthDayRecurFC = new FormControl('', [Validators.required, Validators.max(31)]);
  eventMonthRecurFC1 = new FormControl('', Validators.required);
  eventMonthRecurFC2 = new FormControl('', Validators.required);
  eventYearRecurFC = new FormControl('', Validators.required);
  eventYearDayRecurFC = new FormControl('', [Validators.required, Validators.max(31)]);
  eventFromDateFC = new FormControl('', Validators.required);
  eventToDateFC = new FormControl('', Validators.required);
  eventRecurTimes = new FormControl('', Validators.required);

  checkboxFG: FormGroup
  eventForm: FormGroup
  constructor(private checkboxValidator: FormBuilder) {
    const controls = this.dayOfWeeks.map(c => new FormControl(false));
    this.checkboxFG = this.checkboxValidator.group({
      orders: new FormArray(controls, minSelectedCheckboxes(1))
    });
    this.eventForm = this.checkboxValidator.group({
      eventTypeFC: this.eventTypeFC,
      eventTitleFC: this.eventTitleFC,
      eventRemarkFC: this.eventRemarkFC,
      eventDayRecurFC: this.eventDayRecurFC,
      eventWeekRecurFB: this.eventWeekRecurFB,
      eventMonthDayRecurFC: this.eventMonthDayRecurFC,
      eventMonthRecurFC1: this.eventMonthRecurFC1,
      eventMonthRecurFC2: this.eventMonthRecurFC2,
      eventYearRecurFC: this.eventYearRecurFC,
      eventYearDayRecurFC: this.eventYearDayRecurFC,
      eventFromDateFC: this.eventFromDateFC,
      eventToDateFC: this.eventToDateFC,
      eventRecurTimes: this.eventRecurTimes
    })
  }

  ngOnInit() {
  }
  onClick() {
    console.log(this.eventForm.value)
  }

}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}