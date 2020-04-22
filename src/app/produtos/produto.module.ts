import { MaterialModule } from './../material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  exports: [],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}  ]

})
export class ProdutoModule { }
