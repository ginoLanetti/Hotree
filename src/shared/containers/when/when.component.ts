import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { startsOnValidator, timeValidator, dateValidator } from 'src/shared/utils/custom-validators.util';

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
