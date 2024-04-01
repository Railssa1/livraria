import { Component, ViewChild } from '@angular/core';
import { CarrinhoService } from 'src/app/components/service/carrinho.service';
import { ModalComponent } from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  itensNoCarrinho!: number;

  constructor(
    private carrinhoService: CarrinhoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.atualizarContador();
  }

  atualizarContador(): void {
    this.carrinhoService.atualizacaoCarrinho.subscribe((itensNoCarrinho: number) => {
      this.itensNoCarrinho = itensNoCarrinho;
      if(!this.carrinhoService.isFinalized)
        this.open();
    });
  }

  open(): void {
    this.modalService.open(ModalComponent);
  }
}
