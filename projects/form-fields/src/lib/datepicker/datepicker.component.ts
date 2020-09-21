import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

class DatepickerComponent extends AbstractFormFieldComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.id = this.getId();
  }
}

@Component({
  selector: 'sjs-datepicker',
  templateUrl: './datepicker.material.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerMaterialComponent extends DatepickerComponent {
  openCalendar(picker: MatDatepicker<Date>) {
    picker.open();
  }
}
