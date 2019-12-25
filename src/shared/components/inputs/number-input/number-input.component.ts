import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input() infoText: string;
  @Input() placeholder: string;
  @Input() formController: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
