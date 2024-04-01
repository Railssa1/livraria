import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/components/service/carrinho.service';
import { Livro } from 'src/app/components/interface/livro';
import { LivrosServiceService } from 'src/app/components/service/livros-service.service';

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: LivrosServiceService,
    private carrinhoService: CarrinhoService
  ) { }

  livro: Livro = {
    titulo: '',
    preco: 0,
    urlImage: '',
    resumo: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getBook(parseInt(id!)).subscribe(livro => {
      this.livro = livro;
    });
  }

  adicionarAoCarrinho(livro: Livro): void {
    livro.quantidade = 1;
    this.carrinhoService.adicionarAoCarrinho(livro);
  }
}
