import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { MainFormComponent } from 'src/pages/main-form/main-form.component';
import { TextInputComponent } from 'src/shared/components/inputs/label/text-input.component';
import { TextAreaInputComponent } from 'src/shared/components/inputs/text-area-input/text-area-input.component';
import { NumberInputComponent } from 'src/shared/components/inputs/number-input/number-input.component';
import { SelectInputComponent } from 'src/shared/components/inputs/select-input/select-input.component';
import { RadioInputComponent } from 'src/shared/components/inputs/radio-input/radio-input.component';
import { EmailInputComponent } from 'src/shared/components/inputs/email-input/email-input.component';
import { DateInputComponent } from 'src/shared/components/inputs/date-input/date-input.component';
import { TimeInputComponent } from 'src/shared/components/inputs/time-input/time-input.component';
import { HeaderComponent } from 'src/shared/containers/header/header.component';
import { SectionTitleComponent } from 'src/shared/components/section-title/section-title.component';
import { FormState } from 'src/shared/state/form.state';


@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    TextInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    SelectInputComponent,
    RadioInputComponent,
    EmailInputComponent,
    DateInputComponent,
    TimeInputComponent,
    HeaderComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([FormState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
