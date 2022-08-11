import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePosiblesClientesComponent } from './create-posibles-clientes.component';

describe('CreatePosiblesClientesComponent', () => {
  let component: CreatePosiblesClientesComponent;
  let fixture: ComponentFixture<CreatePosiblesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePosiblesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePosiblesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
