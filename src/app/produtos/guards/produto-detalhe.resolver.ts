import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProdutosService } from './../produtos-service.service';
import { Produto } from './../../core/model';

@Injectable({
    providedIn: 'root'
  })

export class ProdutoDetalheResolver implements Resolve<Produto> {

    constructor(private produtoService: ProdutosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            // tslint:disable-next-line:no-string-literal
            const codigo = route.params['codigo'];

            return this.produtoService.loadByID(codigo);
    }
}
