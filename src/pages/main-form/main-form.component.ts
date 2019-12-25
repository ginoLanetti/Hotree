import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  mainForm: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  submit() {
    this.submitted = true;
    console.log('submitted');
  }

  private buildForm(): void {
    this.mainForm = this.formBuilder.group({

    });
  }
}
