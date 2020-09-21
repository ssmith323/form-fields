import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DatepickerMaterialComponent } from './datepicker/datepicker.component';
import { InputMaterialComponent } from './input/input.component';
import { SelectMaterialComponent } from './select/select.component';
import { SubmitFormDirective } from './submit/submit-form.directive';

const components = [
  InputMaterialComponent,
  SelectMaterialComponent,
  DatepickerMaterialComponent,
];

@NgModule({
  declarations: [components, SubmitFormDirective],
  exports: [ReactiveFormsModule, components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
})
export class FormFieldsMaterialModule {}
