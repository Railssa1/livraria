import { LivrosServiceService } from '../service/livros-service.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/components/interface/livro';

@Component({
  selector: 'app-listar-cards',
  templateUrl: './listar-cards.component.html',
  styleUrls: ['./listar-cards.component.css']
})
export class ListarCardsComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private service: LivrosServiceService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(livro => {
      this.livros = livro;
    });
  }
}
