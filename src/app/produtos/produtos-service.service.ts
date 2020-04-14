import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../core/model';
import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class ProdutosService extends CrudService<Produto> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.apiUrl}/produtos`);

}

  loadByID(codigo) {
    return this.http.get<Produto>(`${environment.apiUrl}/produtos/${codigo}`).pipe(take(1));
  }

  converterStringsParaDatas(produtos: Produto[]) {
    for (const produto of produtos) {
      produto.dataCadastro = moment(produto.dataCadastro,
        'YYYY-MM-DD').toDate();
    }
  }

}
