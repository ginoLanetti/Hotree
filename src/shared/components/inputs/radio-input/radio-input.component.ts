import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Input() radioLabel: string;
  @Input() radioName: string;
  @Input() radioValue: string;
  @Input() formController: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
