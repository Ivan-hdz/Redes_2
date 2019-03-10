import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioRegistroComponent } from './horario-registro.component';

describe('HorarioRegistroComponent', () => {
  let component: HorarioRegistroComponent;
  let fixture: ComponentFixture<HorarioRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
