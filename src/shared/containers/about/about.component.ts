import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FetchingSelectDataService } from 'src/shared/services/fetching-select-data.service';

const feeValidator = (group: FormGroup): any => {
  const payment = group.controls.payment.value;
  const fee = group.controls.fee.value;
  return payment === 'paid' && !fee ? { feeRequired: true } : null;
};
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() submitted: boolean;
  aboutForm: FormGroup;
  optionsList: Array<any>;

  constructor(private formBuilder: FormBuilder, private fetchingSelectData: FetchingSelectDataService) { }

  ngOnInit() {
    this.buildForm();
    this.fetchingSelectData.fetchData('categories').subscribe(
      (data) => this.optionsList = data,
      (error) => console.error(error)
    );
  }

  private buildForm(): void {
    this.aboutForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      category: [null],
      payment: ['free'],
      fee: [''],
      reward: ['']
    }, {validators: feeValidator});
  }
}
