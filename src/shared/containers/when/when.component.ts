import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const startsOnValidator = (group: FormGroup): any => {
  const date = group.controls.date.value;
  const time = group.controls.time.value;
  return date && time ? null : { noDateOrTime: true };
};
@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss']
})
export class WhenComponent implements OnInit {
  whenForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.whenForm = this.formBuilder.group({
      date: [null],
      time: [null],
      ampm: ['am'],
      duration: ['']
    }, {validators: startsOnValidator});
  }
}
