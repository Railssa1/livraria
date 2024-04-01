import { Livro } from '../interface/livro';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() livro: Livro = {
    titulo: '',
    preco: 0,
    urlImage: ''
  }

  constructor(
    private modalService: NgbModal
  ) { }


  fecharModal(): void {
    this.modalService.dismissAll(ModalComponent);
  }
}
