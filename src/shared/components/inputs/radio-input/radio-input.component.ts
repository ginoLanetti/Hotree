import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Input() radioName: string;
  @Input() radioLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
