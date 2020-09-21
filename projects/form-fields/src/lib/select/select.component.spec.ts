import { FormControl } from '@angular/forms';

import { SelectMaterialComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectMaterialComponent;

  beforeEach(() => {
    component = new SelectMaterialComponent();
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
});
