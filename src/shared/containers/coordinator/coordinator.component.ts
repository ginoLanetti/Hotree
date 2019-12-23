import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {
  coordinatorForm: FormGroup;
  usersList = [{label: 'test0', id: 1}, {label: 'test1', id: 2}, {label: 'test2', id: 3}];
  loggedUserId = 3;
  presetUser = this.usersList.find(user => user.id === this.loggedUserId ? user : '');

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.coordinatorForm = this.formBuilder.group({
      responsible: [this.presetUser, Validators.required],
      email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });
  }
}
