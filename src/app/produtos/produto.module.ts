import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [CadastroProdutosComponent, PesquisaProdutosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProdutosRoutingModule,
    MaterialModule
  ],
  exports: [

  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}  ]

})
export class ProdutoModule { }
