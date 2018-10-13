import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, ErrorStateMatcher } from '@angular/material';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  recurring: boolean = true;
  result='';
  isSubmit =false;
  //validation
  matcher = new MyErrorStateMatcher();
  titleFormControl = new FormControl('', Validators.required);
  eventFromFormControl = new FormControl('', [Validators.required]);
  eventToFormControl = new FormControl('', [Validators.required]);
  reMarkFormControl = new FormControl('', [Validators.required]);
  eventTypeFormControl = new FormControl('', [Validators.required]);
  eventForm: FormGroup;
  constructor(public diglogref: MatDialogRef<AddEventComponent>, private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      title: this.titleFormControl,
      eventFrom: this.eventFromFormControl,
      eventTo: this.eventToFormControl,
      remark: this.reMarkFormControl,
      type: this.eventTypeFormControl
    })
  }
  closeRefdialog() {
    this.diglogref.close();
  }
  addEvent() {
    console.log(new Date('10/20/2018'))
  }
  onSubmit() {
    if (this.eventForm.valid) {
      this.result = 'Add success'
      this.isSubmit = true;
     console.log(this.eventForm.value)
    } else {
      console.log('invalid')
    }
  }
  isRecurring(event) {
    console.log(this.recurring);
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}