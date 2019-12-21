import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './src/shared/components/inputs/text-area/text-area.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { HeaderComponent } from './header/header.component';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    TextInputComponent,
    TextAreaComponent,
    InputAreaComponent,
    SelectComponent,
    RadioComponent,
    NumberInputComponent,
    SelectInputComponent,
    TextAreaInputComponent,
    RadioInputComponent,
    EmailInputComponent,
    DateInputComponent,
    TimeInputComponent,
    HeaderComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
