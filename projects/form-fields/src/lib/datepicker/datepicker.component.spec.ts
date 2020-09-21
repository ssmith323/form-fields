import { FormControl } from '@angular/forms';

import { DatepickerMaterialComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: DatepickerMaterialComponent;

  beforeEach(() => {
    component = new DatepickerMaterialComponent();
  });

  it('should have a no id override', () => {
    component.label = 'Test';
    component.control = new FormControl();

    component.ngOnInit();

    expect(component.id).toEqual('Test');
  });

  it('should have a id override', () => {
    component.label = 'Test';
    component.idOverride = 'Hi';
    component.control = new FormControl();

    component.ngOnInit();

    expect(component.id).toEqual('Hi');
  });

  it('should call picker open', () => {
    component.label = 'Test';
    component.control = new FormControl();
    const picker = jasmine.createSpyObj(['open']);

    component.openCalendar(picker);

    expect(picker.open).toHaveBeenCalled();
  });
});
