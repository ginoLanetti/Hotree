import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() formDateController: FormControl;
  @Input() formTimeController: FormControl;
  @Input() formRadioController: FormControl;
  @Input() minDate: string;
  @Input() submitted: boolean;
}
