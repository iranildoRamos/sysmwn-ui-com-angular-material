import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  imports: [
  CommonModule,
  HttpClientModule,
  RouterModule,
  MaterialModule

],
declarations: [
  NavbarComponent,
  NaoAutorizadoComponent,
  PaginaNaoEncontradaComponent,

],
exports: [
  NavbarComponent
 ]

})
export class CoreModule { }
