import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { FormState } from 'src/shared/state/form.state';
import { FormattedFormStateInterface } from 'src/shared/interfaces/formatted-state.interface';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, OnDestroy {
  @Select(FormState.getFormData) formData$: Observable<any>;
  mainForm: FormGroup;
  submitted: boolean;
  formStateData: FormattedFormStateInterface;
  formDataSubscription: Subscription;
  formsValid: boolean;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.formDataSubscription = this.formData$.subscribe(data => {
      this.formStateData = data;
    },
    (error) => console.error(error)
    );
  }

  ngOnDestroy() {
    this.formDataSubscription.unsubscribe();
  }

  submit() {
    this.submitted = true;
    console.log(this.formStateData);
  }

  private buildForm(): void {
    this.mainForm = this.formBuilder.group({

    });
  }
}
