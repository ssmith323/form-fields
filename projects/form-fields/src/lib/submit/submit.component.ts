import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { lib } from '../form-fields.module';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent {
  @Input() form: FormGroup;
}
