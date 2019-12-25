import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() actionText: string;
  @Input() buttonType: string;
  @Input() formController: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
