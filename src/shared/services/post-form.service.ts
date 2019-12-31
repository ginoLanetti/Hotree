import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormStateInterface } from '../interfaces/form-state.interface';

interface PostFormDataResponse {
  success: boolean;
}
@Injectable({ providedIn: 'root' })
export class PostFormService {

  constructor(private httpClient: HttpClient) { }

  postData(data: FormStateInterface): Observable<PostFormDataResponse> {
    const { title, description, category, payment, fee, reward } = data.aboutForm.model;
    const { responsible, email } = data.coordinatorForm.model;
    const { date, time, ampm, duration } = data.whenForm.model;

    const convertTime = (timeString: string): string => {
      const timeArray = timeString.split(':');
      const min = timeArray[1];
      let hour = timeArray[0];
      if (ampm === 'pm' && Number(hour) < 12) {
        hour = `${12 + parseInt(timeArray[0], 10)}`;
      } else if ((ampm === 'pm' && Number(hour) === 12)) {
        hour = `${parseInt(timeArray[0], 10) - 12}`;
      }
      return `${hour}:${min}`;
    };

    const formattedData = {
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
    console.log(formattedData);
    // for the purpose of returning observable boolean observable is created below.
    // In real-world scenario line 51 should have been applied
    const response: Observable<PostFormDataResponse> = of({ success: true });
    //  this.httpClient.post<PostFormDataResponse>(apiUrl, JSON.stringify(formattedData));
    return response;
  }
}
