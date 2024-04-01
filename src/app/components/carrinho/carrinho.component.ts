import { CarrinhoService } from 'src/app/components/service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/components/interface/livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoCompraComponent } from '../modal-confirmacao-compra/modal-confirmacao-compra.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: Livro[] = [];
  totalCompra: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.livrosNoCarrinho;
    this.calcularTotalCompra();
  }

  calcularTotal(preco: number, quantidade: number): number {
    return preco * (quantidade || 1);
  }

  limpar(): void {
    this.carrinhoService.limparCarrinho();
    this.carrinhoService.isFinalized = false;
    this.itensCarrinho = [];
    this.totalCompra = 0;
  }

  finalizarCompra(): void {
    const modalRef = this.modalService.open(ModalConfirmacaoCompraComponent);
    this.calcularTotalCompra();
    modalRef.componentInstance.totalCompra = this.totalCompra;
  }

  calcularTotalCompra(): void {
    this.totalCompra = this.carrinhoService.calcularTotalCompra();
  }
}
