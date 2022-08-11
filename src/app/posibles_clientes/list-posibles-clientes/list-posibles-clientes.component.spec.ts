import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPosiblesClientesComponent } from './list-posibles-clientes.component';

describe('ListPosiblesClientesComponent', () => {
  let component: ListPosiblesClientesComponent;
  let fixture: ComponentFixture<ListPosiblesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPosiblesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPosiblesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
