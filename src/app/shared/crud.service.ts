import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// @Injectable({
//  providedIn: 'root'
// })
export class CrudService <T> {

  constructor(protected http: HttpClient, private API_URL) {}

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        // delay(2000),
        tap(console.log)
      );
  }

  loadByID(codigo) {
    return this.http.get<T>(`${this.API_URL}/${codigo}`).pipe(take(1));
  }

  private create(dadosDaEntidade: T) {
    return this.http.post<T>(this.API_URL, dadosDaEntidade).pipe(take(1));
  }

  private update(dadosDaEntidade: T) {
    // tslint:disable-next-line:no-string-literal
    return this.http.put<T>(`${this.API_URL}/${dadosDaEntidade['codigo']}`, dadosDaEntidade).pipe(take(1));
  }

  save(dadosDaEntidade: T) {
    // tslint:disable-next-line:no-string-literal
    if (dadosDaEntidade['codigo']) {
      return this.update(dadosDaEntidade);
    } else {
    return this.create(dadosDaEntidade);
    }
  }

  remove(codigo) {
    return this.http.delete<T>(`${this.API_URL}/${codigo}`).pipe(take(1));
  }
}

