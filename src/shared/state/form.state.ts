import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FormStateInterface } from '../interfaces/form-state.interface';
import { PostForm } from './form.actions';
import { PostFormService } from '../services/post-form.service';


@State<FormStateInterface>({
  name: 'formData',
  defaults: {
    aboutForm: {
      model: undefined,
    },
    coordinatorForm: {
      model: undefined,
    },
    whenForm: {
      model: undefined,
    }
  }
})
export class FormState {
  constructor(private service: PostFormService) {}

  @Selector()
  static getFormData(state: FormStateInterface): FormStateInterface {
    return state;
  }
  @Action(PostForm)
  postForm(context: StateContext<FormStateInterface>) {
    const aboutForm = context.getState().aboutForm.model;
    const coordinatorForm = context.getState().coordinatorForm.model;
    const whenForm = context.getState().whenForm.model;
    const formattedState = {
      aboutForm,
      coordinatorForm,
      whenForm
    };
    return this.service.postData(formattedState);
  }
}
