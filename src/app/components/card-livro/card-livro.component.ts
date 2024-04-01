import { Component, Input } from '@angular/core';
import { Livro } from 'src/app/components/interface/livro';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent {
  @Input() livro: Livro = {
    titulo: 'Branca de neve e os sete anões',
    preco: 15.70,
    urlImage: 'https://m.media-amazon.com/images/I/81zuOH9O7vL._SL1500_.jpg'
  };
}
