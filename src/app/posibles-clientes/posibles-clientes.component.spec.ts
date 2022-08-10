import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosiblesClientesComponent } from './posibles-clientes.component';

describe('PosiblesClientesComponent', () => {
  let component: PosiblesClientesComponent;
  let fixture: ComponentFixture<PosiblesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosiblesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosiblesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
