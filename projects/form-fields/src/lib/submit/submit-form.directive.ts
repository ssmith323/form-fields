import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: 'form[formGroup]',
})
export class SubmitFormDirective {
  @Input() formGroup: FormGroup;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    for (const control in this.formGroup.controls) {
      if (this.formGroup.controls.hasOwnProperty(control)) {
        this.formGroup.controls[control].markAsTouched();
      }
    }
    if (!this.formGroup.valid) {
      event.preventDefault();
    }
  }
}
