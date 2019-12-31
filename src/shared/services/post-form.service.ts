import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormattedFormStateInterface } from '../interfaces/formatted-state.interface';
// import { FormStateInterface } from '../interfaces/form-state.interface';


@Injectable({ providedIn: 'root' })
export class PostFormService {
    constructor(private httpClient: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    postData(state: any): Observable<FormattedFormStateInterface | boolean> {
      const { title, description, category, payment, fee, reward } = state.aboutForm;
      const { responsible, email } = state.coordinatorForm;
      const { date, time, ampm, duration } = state.whenForm;

      const convertTime = (timeString: string) => {
        const timeArray = timeString.split(':');
        const min = timeArray[1];
        let hour = timeArray[0];
        if (ampm === 'pm' && Number(hour) < 12) {
          hour = `${12 + parseInt(timeArray[0], 10)}`;
        } else if ((ampm === 'pm' && Number(hour) === 12)) {
          hour = `${parseInt(timeArray[0], 10) - 12}`;
        }
        return `${Number(hour) < 10 ? `0${hour}` : hour }:${min}`;
      };

      const formattedState = {
        title,
        description,
        category_id: category,
        paid_event: payment === 'paid' ? true : false,
        event_fee: payment === 'paid' ? fee : null,
        reward: reward ? reward : null,
        date: `${date}T${convertTime(time)}`,
        duration: duration * 3600,
        coordinator: {
          email,
          id: responsible
        }
      };

      const apiUrl = `https://serverDomain`;
      //  this.httpClient.post<FormattedFormStateInterface>(apiUrl, JSON.stringify(formattedState), this.httpOptions);
      console.log(formattedState);
      const success = of(true);
      return success;
    }
}
