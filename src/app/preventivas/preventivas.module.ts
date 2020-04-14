import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventivasRoutingModule } from './preventivas-routing.module';
import { CadastrarPreventivasComponent } from './cadastrar-preventivas/cadastrar-preventivas.component';
import { PesquisarPreventivasComponent } from './pesquisar-preventivas/pesquisar-preventivas.component';


@NgModule({
  declarations: [CadastrarPreventivasComponent, PesquisarPreventivasComponent],
  imports: [
    CommonModule,
    PreventivasRoutingModule
  ]
})
export class PreventivasModule { }
