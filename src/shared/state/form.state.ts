import { State, Action, StateContext } from '@ngxs/store';
import { FormStateInterface, AboutFormInterface, CoordinatorFormInterface, WhenFormInterface } from '../interfaces/form-state.interface';
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

  @Action(PostForm)
  postForm(context: StateContext<FormStateInterface>) {
    const aboutForm: AboutFormInterface = context.getState().aboutForm.model;
    const coordinatorForm: CoordinatorFormInterface = context.getState().coordinatorForm.model;
    const whenForm: WhenFormInterface = context.getState().whenForm.model;
    const formData = {
      aboutForm: {
        model: aboutForm,
      },
      coordinatorForm: {
        model: coordinatorForm
      },
      whenForm: {
        model: whenForm
      },
    };
    return this.service.postData(formData);
  }
}
