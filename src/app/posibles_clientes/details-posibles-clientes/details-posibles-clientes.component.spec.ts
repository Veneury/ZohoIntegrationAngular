import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPosiblesClientesComponent } from './details-posibles-clientes.component';

describe('DetailsPosiblesClientesComponent', () => {
  let component: DetailsPosiblesClientesComponent;
  let fixture: ComponentFixture<DetailsPosiblesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPosiblesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPosiblesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
