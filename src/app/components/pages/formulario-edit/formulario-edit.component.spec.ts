import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditComponent } from './formulario-edit.component';

describe('FormularioEditComponent', () => {
  let component: FormularioEditComponent;
  let fixture: ComponentFixture<FormularioEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEditComponent]
    });
    fixture = TestBed.createComponent(FormularioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
