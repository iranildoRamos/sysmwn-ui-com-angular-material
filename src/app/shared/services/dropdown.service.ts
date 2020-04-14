import { Categoria, Marca } from './../../core/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EstadoBr } from './../models/estado-br.model';
import { Cidade } from '../models/cidade';
import { map } from '../../../../node_modules/rxjs/operators';
import { Modelo } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})

export class DropdownService {
  constructor(private http: HttpClient) {}

  getMarcas() {
    return this.http.get<Marca[]>('assets/dados/marcas.json');
  }

  getModelos() {
    return this.http.get<Modelo[]>('assets/dados/modelos.json');
  }

  getCategorias() {
    return this.http.get<Categoria[]>('assets/dados/categorias.json');
  }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      // tslint:disable-next-line:triple-equals
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

  getTecnologias() {

    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
