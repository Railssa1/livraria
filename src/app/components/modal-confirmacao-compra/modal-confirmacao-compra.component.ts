import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoService } from 'src/app/components/service/carrinho.service';

@Component({
  selector: 'app-modal-confirmacao-compra',
  templateUrl: './modal-confirmacao-compra.component.html',
  styleUrls: ['./modal-confirmacao-compra.component.css']
})
export class ModalConfirmacaoCompraComponent {
  totalCompra: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private carrinhoService: CarrinhoService,
    private modalService: NgbModal
  ) {}

  goHome(): void {
    this.carrinhoService.limparCarrinho();
    this.carrinhoService.isFinalized = true;
    this.modalService.dismissAll(ModalConfirmacaoCompraComponent);
  }
}
