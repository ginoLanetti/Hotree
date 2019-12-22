import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutForm: FormGroup;
  optionsList = [{label: 'test0', id: 1}, {label: 'test1', id: 2}, {label: 'test2', id: 3}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.aboutForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [this.optionsList[1]],
      payment: ['free'],
      reward: ['']
    });
  }
}
