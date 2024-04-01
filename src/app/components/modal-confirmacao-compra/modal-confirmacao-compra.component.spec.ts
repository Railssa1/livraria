import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoCompraComponent } from './modal-confirmacao-compra.component';

describe('ModalConfirmacaoCompraComponent', () => {
  let component: ModalConfirmacaoCompraComponent;
  let fixture: ComponentFixture<ModalConfirmacaoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmacaoCompraComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmacaoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
