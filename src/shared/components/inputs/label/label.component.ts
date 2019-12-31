import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
@Input() labelName: string;
@Input() mandatory: boolean;
@Input() submitted: boolean;
@Input() formErrors: ValidationErrors;
@Input() inputErrors: ValidationErrors;
}
