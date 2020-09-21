import { Component, Input, OnInit } from '@angular/core';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

class InputComponent extends AbstractFormFieldComponent implements OnInit {
  @Input() type: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}

@Component({
  selector: 'sjs-input',
  templateUrl: './input.material.component.html',
})
export class InputMaterialComponent extends InputComponent {}
