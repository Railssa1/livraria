import { EventEmitter, Injectable } from '@angular/core';
import { Livro } from '../interface/livro';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  livrosNoCarrinho: Livro[] = [];
  atualizacaoCarrinho: EventEmitter<number> = new EventEmitter<number>();
  isFinalized: boolean =  false;

  constructor() { }

  adicionarAoCarrinho(livro: Livro): void {
    this.livrosNoCarrinho.push(livro);
    this.isFinalized = false;
    this.atualizacaoCarrinho.emit(this.livrosNoCarrinho.length);
  }

  limparCarrinho(): void {
    this.livrosNoCarrinho = [];
    this.isFinalized = true;
    this.atualizacaoCarrinho.emit(0);
  }

  calcularTotalCompra(): number {
    let total = 0;
    this.livrosNoCarrinho.forEach(item => {
      total += item.preco * (item.quantidade || 1);
    });
    return total;
  }
}
