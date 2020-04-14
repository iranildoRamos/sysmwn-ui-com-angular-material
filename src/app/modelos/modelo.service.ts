import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Modelo } from 'src/app/core/model';
import { environment } from './../../environments/environment';
import { CrudService } from './../shared/crud.service';


@Injectable({
  providedIn: 'root'
})
export class ModeloService extends CrudService<Modelo> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.apiUrl}/modelos`);
   }
   loadByID(codigo) {
     return null;
   }
}
