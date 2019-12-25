import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const startsOnValidator = (group: FormGroup): any => {
  const date = group.controls.date.value;
  const time = group.controls.time.value;
  return date && time ? null : { noDateOrTime: true };
};
const timeValidator = (group: FormGroup): any => {
  const time = group.controls.time.value;
  return  (time && /^(1[0-2]|0?[1-9]):[0-5][0-9]/.test(time)) ? null : { badTimeFormat: true };
};
const dateValidator = (group: FormGroup): any => {
  const date = group.controls.date.value;
  return  new Date(date) < new Date()  ? { datePriorToEvent: true } : null;
};

@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss']
})
export class WhenComponent implements OnInit {
  @Input() submitted: boolean;
  whenForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    console.log(/^(1[0-2]|0?[1-9]):[0-5][0-9]/.test(this.whenForm.controls.time.value));
    console.log(this.whenForm.errors);
  }

  minDate() {
    const now = new Date();
    let month = (now.getMonth() + 1).toString();
    let day = (now.getDate()).toString();
    const year = now.getFullYear();
    if (Number(month) < 10) {
      month = `0${month}`;
    }
    if (Number(day) < 10) {
      day = `0${day.toString()}`;
    }
    const minDate = `${year}-${month}-${day}`;
    return minDate;
  }

  private buildForm(): void {
    this.whenForm = this.formBuilder.group({
      date: [null],
      time: [null],
      ampm: ['am'],
      duration: ['']
    }, {validators: [startsOnValidator, timeValidator, dateValidator]});
  }
}
