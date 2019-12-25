import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {
  @Input() submitted: boolean;
  coordinatorForm: FormGroup;
  usersList = [{name: 'test0', id: 1}, {name: 'test1', id: 2}, {name: 'test2', id: 3}];
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
