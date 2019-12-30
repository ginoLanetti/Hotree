import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  @Input() infoText: string;
  @Input() placeholder: string;
  @Input() formController: FormControl;
  @Input() submitted: boolean;
  @Input() formErrors: ValidationErrors;
  constructor() { }

}
