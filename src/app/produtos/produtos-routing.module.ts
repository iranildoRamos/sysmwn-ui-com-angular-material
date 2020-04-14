import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisaProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PRODUTO'] }
  },
  {
    path: 'novo',
    component: CadastroProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUTO'] }
  },
  {
    path: 'editar/:codigo',
    component: CadastroProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
