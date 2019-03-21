import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlumnoComponent } from './consultar-alumno.component';

describe('ConsultarAlumnoComponent', () => {
  let component: ConsultarAlumnoComponent;
  let fixture: ComponentFixture<ConsultarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
