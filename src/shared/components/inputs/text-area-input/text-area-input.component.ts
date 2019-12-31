import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent {
  @Input() placeholder: string;
  @Input() formController: FormControl;
  @Input() maxCharacterLength: number;
  @Input() submitted: boolean;
}
