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
  public aboutValidity: string;
  public coordinatorValidity: string;
  public whenValidity: string;
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
    if (
      this.aboutValidity === 'VALID' &&
      this.coordinatorValidity === 'VALID' &&
      this.whenValidity === 'VALID'
    ) {
      this.formsValid = true;
      console.log(this.formStateData);
    }
  }

  validityHandler($event: any, receiver: string) {
    switch (receiver) {
      case 'about':
        this.aboutValidity = $event;
        break;
      case 'coordinator':
        this.coordinatorValidity = $event;
        break;
      case 'when':
        this.whenValidity = $event;
        break;
      default:
        console.error('no validity receiver');
    }
  }

  private buildForm(): void {
    this.mainForm = this.formBuilder.group({
    });
  }
}
