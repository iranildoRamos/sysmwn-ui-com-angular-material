import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Marca } from './../core/model';
import { environment } from './../../environments/environment';
import { CrudService } from './../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends CrudService<Marca> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.apiUrl}/marcas`);
   }
   loadByID(codigo) {
    return null;
  }
}
