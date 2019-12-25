import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  optionsList = [{name: 'test0', id: 1}, {name: 'test1', id: 2}, {name: 'test2', id: 3}];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.aboutForm.controls.description);
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
