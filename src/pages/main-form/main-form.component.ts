import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { FormState } from 'src/shared/state/form.state';
import { FormStateInterface } from 'src/shared/interfaces/form-state.interface';
import { PostForm } from 'src/shared/state/form.actions';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, OnDestroy {
  @Select(FormState) formData$: Observable<FormStateInterface>;
  submitted: boolean;
  postSuccess: boolean;
  private formStateData: FormStateInterface;
  private formDataSubscription: Subscription;
  public aboutValidity: string;
  public coordinatorValidity: string;
  public whenValidity: string;


  constructor(private store: Store) { }

  ngOnInit() {
    this.formDataSubscription = this.formData$.subscribe(data =>  this.formStateData = data);
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
      this.store.dispatch(new PostForm()).subscribe(
        success => this.postSuccess = success,
        error => console.error(error)
      );
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
}
