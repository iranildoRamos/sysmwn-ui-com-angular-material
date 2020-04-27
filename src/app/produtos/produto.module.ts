import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SharedModule } from './../shared/shared.module';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [CadastroProdutosComponent, PesquisaProdutosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProdutosRoutingModule,
    MaterialModule,

    NgxMaskModule.forRoot(options)

  ],
  exports: []
})
export class ProdutoModule { }
