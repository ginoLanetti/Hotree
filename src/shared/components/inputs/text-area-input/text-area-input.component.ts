import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() formController: FormControl;
  characterCount: number;

  constructor() { }

  ngOnInit() {
  }

}
