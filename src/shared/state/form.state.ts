import { State } from '@ngxs/store';

interface FormStateModel {
  title: string;
}

@State<FormStateModel>({
  name: 'formData',
  defaults: {
      title: ''
  }
})
export class FormState {

}
