import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalheLivroComponent } from "./components/detalhe-livro/detalhe-livro.component";
import { ListarCardsComponent } from "./components/listar-cards/listar-cards.component";
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";
import { LoginComponent } from "./components/login/login.component";
import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
import { CadastrarLivrosComponent } from "./components/cadastrar-livros/cadastrar-livros.component";
import { EsqueciSenhaComponent } from "./components/esqueci-senha/esqueci-senha.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-livros',
    pathMatch: 'full',
  },
  {
    path: 'listar-livros',
    component: ListarCardsComponent
  },
  {
    path: 'listar-livros/:id',
    component: DetalheLivroComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'cadastrar-livros',
    component: CadastrarLivrosComponent
  },
  {
    path: 'esqueci-senha',
    component: EsqueciSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
