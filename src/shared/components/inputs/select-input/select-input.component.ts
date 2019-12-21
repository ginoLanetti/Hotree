import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() preselected: number;
  optionsList = [{label: 'test', id: 3}, {label: 'test2', id: 2}];

  constructor() { }

  ngOnInit() {
  }

}
