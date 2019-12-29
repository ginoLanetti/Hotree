import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent {
  @Input() submitted: boolean;
  @Input() sectionName: string;
  @Input() inputErrors: ValidationErrors;
  @Input() formErrors: ValidationErrors;
  getAlert(): string {
    if (this.inputErrors) {
      if (this.inputErrors.maxlength) {
        return `${this.sectionName} field has ${this.inputErrors.maxlength.requiredLength} character limit`;
      } else if (this.inputErrors.required) {
        return `${this.sectionName} field is required`;
      } else if (this.inputErrors.pattern) {
        return `Imvalid e-mail format`;
      }
    } else if (this.formErrors) {
      if (this.formErrors.feeRequired) {
        return `Fee value is required`;
      } else if (this.formErrors.noDateOrTime) {
        return `Time and date are required`;
      } else if (this.formErrors.badTimeFormat) {
        return `Time field accepts only 12 hours format`;
      } else if (this.formErrors.eventPriorToDate) {
        return `Events can’t be created prior to the actual date and time`;
      }
    }
  }

  constructor() { }
}
