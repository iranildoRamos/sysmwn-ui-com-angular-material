import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { Produto } from '../core/model';
import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService extends CrudService<Produto> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.apiUrl}/produtos`);

}

  buscarPorCódigo(codigo): Promise<Produto> {
    return this.http.get<Produto>
    (`${environment.apiUrl}/produtos/${codigo}`).toPromise()
    .then(response => {
      const produto = response;
      this.converterStringsParaDatas([produto]);
      return produto;
    });
  }

  private converterStringsParaDatas(Produtos: Produto[]) {
    for (const produto of Produtos) {
      produto.dataCadastro = moment(produto.dataCadastro,
        'YYYY-MM-DD').toDate();
    }
  }

  }
