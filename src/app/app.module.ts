import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardLivroComponent } from './components/card-livro/card-livro.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarCardsComponent } from './components/listar-cards/listar-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheLivroComponent } from './components/detalhe-livro/detalhe-livro.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ModalConfirmacaoCompraComponent } from './components/modal-confirmacao-compra/modal-confirmacao-compra.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CadastrarLivrosComponent } from './components/cadastrar-livros/cadastrar-livros.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardLivroComponent,
    FooterComponent,
    ListarCardsComponent,
    DetalheLivroComponent,
    ModalComponent,
    CarrinhoComponent,
    ModalConfirmacaoCompraComponent,
    LoginComponent,
    CadastrarComponent,
    CadastrarLivrosComponent,
    EsqueciSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
