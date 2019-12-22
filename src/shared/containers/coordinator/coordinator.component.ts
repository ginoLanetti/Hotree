import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {
  coordinatorForm: FormGroup;
  optionsList = [{label: 'test0', id: 1}, {label: 'test1', id: 2}, {label: 'test2', id: 3}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.coordinatorForm = this.formBuilder.group({
      responsible: [this.optionsList[1]],
      email: ['']
    });
  }
}
