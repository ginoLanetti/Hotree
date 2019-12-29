import { State, Selector } from '@ngxs/store';
import { FormattedFormStateInterface } from '../interfaces/formatted-state.interface';

@State({
  name: 'formData',
  defaults: {
    aboutForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    },
    coordinatorForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    },
    whenForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class FormState {
    @Selector()
    static getFormData(state: any): FormattedFormStateInterface {
      const {title, description, category, payment, fee, reward} = state.aboutForm.model;
      const {responsible, email} = state.coordinatorForm.model;
      const {date, time, ampm, duration} = state.whenForm.model;
      const convertTime = (time) => {
        time = time.split(':');
        const min = time[1];
        let hour = time[0];
        if (ampm === 'pm') {
          hour = 12 + parseInt(time[0], 10);
        }
        return `${hour}:${min}`;
      };
      const formattedState = {
        title: `${title}`,
        description: `${description}`,
        category_id: category,
        paid_event: payment === 'paid' ? true : false,
        event_fee: payment === 'paid' ? fee : null,
        reward: reward ? reward : null,
        date: `${date}T${convertTime(time)}`,
        duration: duration * 3600,
        coordinator: {
          email: `${email}`,
          id: responsible
        }
      };
      return formattedState;
    }
}
