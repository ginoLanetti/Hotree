import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FetchingSelectDataService } from 'src/shared/services/fetching-select-data.service';
import { OptionInterface } from 'src/shared/interfaces/option.inteface';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {
  @Input() submitted: boolean;
  coordinatorForm: FormGroup;
  usersList: Array<object>;
  loggedUserId = 3;
  presetUser: OptionInterface;

  constructor(private formBuilder: FormBuilder, private fetchingSelectData: FetchingSelectDataService) { }

  ngOnInit() {

    this.fetchingSelectData.fetchData('employes').subscribe(
      (data) => {
        this.usersList = data;
        this.presetUser = data.find(user => user.id === this.loggedUserId ? user : '');
        this.coordinatorForm.controls.responsible.setValue(this.presetUser.id);
        console.log(this.presetUser);
      },
      (error) => console.error(error)
    );
    this.buildForm();
  }

  private buildForm(): void {
    this.coordinatorForm = this.formBuilder.group({
      responsible: [null, Validators.required],
      email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });
  }
}
