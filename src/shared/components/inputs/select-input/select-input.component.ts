import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() presetOption: object;
  @Input() placeholder: string;
  @Input() presetOptgroupName: string;
  @Input() otherOptgroupName: string;
  @Input() annotation: string;
  @Input() formController: FormControl;
  @Input() optionsList: Array<object>;

  constructor() { }
  ngOnInit() {
  }

}
