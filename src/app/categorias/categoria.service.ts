import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Categoria } from './../core/model';
import { environment } from './../../environments/environment.prod';
import { CrudService } from './../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.apiUrl}/categorias`);
}
loadByID(codigo) {
  return null;
}
}
