import { Component, OnInit } from '@angular/core';
import { LivrosServiceService } from '../service/livros-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.css']
})
export class CadastrarLivrosComponent implements OnInit {
  constructor(
    private service: LivrosServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  formulario!: FormGroup;

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        titulo: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
        preco: ['', Validators.required],
        autor: ['', Validators.required],
        urlImage: ['', Validators.required],
        resumo: ['', Validators.required],
        quantidade: ['', Validators.required]
      });
  }

  cadastrar(): void {
    if(this.formulario.valid){
      this.service.cadastrar(this.formulario.value).subscribe(() => {
        return this.router.navigate(['/'])
      });
    }
  }
}
