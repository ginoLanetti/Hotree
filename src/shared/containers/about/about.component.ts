import { Component, OnInit, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FetchingSelectDataService } from 'src/shared/services/fetching-select-data.service';
import { OptionInterface } from 'src/shared/interfaces/option.inteface';
import { EventEmitter } from 'protractor';
import { feeValidator } from 'src/shared/utils/custom-validators.util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() submitted: boolean;
  // @Output() validityChange = new EventEmitter();
  aboutForm: FormGroup;
  optionsList: OptionInterface[];
  constructor(private formBuilder: FormBuilder, private fetchingSelectData: FetchingSelectDataService) { }

  ngOnInit() {
    this.buildForm();
    this.fetchingSelectData.fetchData('categories').subscribe(
      (data) => this.optionsList = data,
      (error) => console.error(error)
    );
    console.log(this.aboutForm.controls.description.errors);
    // this.aboutForm.statusChanges.subscribe(
    //   status => {
    //    this.validityChange.emit(status);
    //   }
    // );
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
