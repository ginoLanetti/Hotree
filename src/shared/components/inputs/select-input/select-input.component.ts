import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OptionInterface } from 'src/shared/interfaces/option.inteface';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {
  @Input() optionsList: OptionInterface[];
  @Input() presetOption: OptionInterface;
  @Input() placeholder: string;
  @Input() presetOptgroupName: string;
  @Input() otherOptgroupName: string;
  @Input() annotation: string;
  @Input() formController: FormControl;

  constructor() { }

}
