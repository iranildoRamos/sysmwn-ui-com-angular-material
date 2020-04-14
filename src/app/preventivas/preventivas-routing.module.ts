import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { CadastrarPreventivasComponent } from './cadastrar-preventivas/cadastrar-preventivas.component';
import { PesquisarPreventivasComponent } from './pesquisar-preventivas/pesquisar-preventivas.component';

const routes: Routes = [
  {
    path: 'preventivas',
    component: PesquisarPreventivasComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PREVENTIVA'] }
  },
  {
    path: 'produto/serie',
    component: CadastrarPreventivasComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PREVENTIVA'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreventivasRoutingModule { }
