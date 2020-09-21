import { Component, Input, OnInit } from '@angular/core';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';
import { BasicOption } from '../basic-option';

abstract class SelectComponent
  extends AbstractFormFieldComponent
  implements OnInit {
  @Input() options: BasicOption[];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}

@Component({
  selector: 'sjs-select',
  templateUrl: './select.material.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectMaterialComponent extends SelectComponent {}
