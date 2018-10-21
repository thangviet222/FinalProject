import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, FormGroup, Validators, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { ApplyLeave } from '../../../model/applyLeave';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  date = Date();
  result='';
  isSubmit =false;
  applyLeave = new ApplyLeave()
  //validation
  matcher = new MyErrorStateMatcher();
  staffName = new FormControl('', Validators.required);
  employeeID = new FormControl('', [Validators.required]);
  leaveType = new FormControl('', [Validators.required]);
  fromDate = new FormControl('', [Validators.required]);
  toDate = new FormControl('', [Validators.required]);
  eventForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      staffName: this.staffName,
      empID: this.employeeID,
      leaveType: this.leaveType,
      fromDate: this.fromDate,
      toDate: this.toDate
    })
  }

  public Hello(): void {
    
  }
  onSubmit() {
    if(!this.eventForm.valid){
      
    }
      
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
