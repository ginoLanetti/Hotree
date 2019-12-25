import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from 'src/pages/main-form/main-form.component';
import { LabelComponent } from 'src/shared/components/inputs/label/label.component';
import { TextAreaInputComponent } from 'src/shared/components/inputs/text-area-input/text-area-input.component';
import { SelectInputComponent } from 'src/shared/components/inputs/select-input/select-input.component';
import { RadioInputComponent } from 'src/shared/components/inputs/radio-input/radio-input.component';
import { NumberInputComponent } from 'src/shared/components/inputs/number-input/number-input.component';
import { EmailInputComponent } from 'src/shared/components/inputs/email-input/email-input.component';
import { DateInputComponent } from 'src/shared/components/inputs/date-input/date-input.component';
import { TimeInputComponent } from 'src/shared/components/inputs/time-input/time-input.component';
import { HeaderComponent } from 'src/shared/containers/header/header.component';
import { SectionTitleComponent } from 'src/shared/components/section-title/section-title.component';
import { AboutComponent } from 'src/shared/containers/about/about.component';
import { CoordinatorComponent } from 'src/shared/containers/coordinator/coordinator.component';
import { WhenComponent } from 'src/shared/containers/when/when.component';
import { SuccessComponent } from 'src/shared/containers/success/success.component';
import { ButtonComponent } from 'src/shared/components/button/button.component';
import { TextInputComponent } from 'src/shared/components/inputs/text-input/text-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    AboutComponent,
    CoordinatorComponent,
    WhenComponent,
    SuccessComponent,
    TextInputComponent,
    TextAreaInputComponent,
    SelectInputComponent,
    RadioInputComponent,
    NumberInputComponent,
    EmailInputComponent,
    DateInputComponent,
    TimeInputComponent,
    HeaderComponent,
    LabelComponent,
    SectionTitleComponent,
    ButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
