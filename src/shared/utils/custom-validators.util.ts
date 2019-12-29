import { FormGroup } from '@angular/forms';

export const feeValidator = (group: FormGroup): any => {
  const payment = group.controls.payment.value;
  const fee = group.controls.fee.value;
  return payment === 'paid' && !fee ? { feeRequired: true } : null;
};

export const startsOnValidator = (group: FormGroup): any => {
  const date = group.controls.date.value;
  const time = group.controls.time.value;
  console.log(date);
  console.log(time);
  return date && time ? null : { noDateOrTime: true };
};

export const timeValidator = (group: FormGroup): any => {
  const time = group.controls.time.value;
  return (time && /^(1[0-2]|0?[0-9]):[0-5][0-9]/.test(time)) ? null : { badTimeFormat: true };
};

export const dateValidator = (group: FormGroup): any => {
  const date = group.controls.date.value;
  return new Date(date) < new Date() ? { eventPriorToDate: true } : null;
};
