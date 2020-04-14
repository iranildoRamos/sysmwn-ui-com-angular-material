import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './../material/material.module';

import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
  CommonModule,
  HttpClientModule,
  RouterModule,
  MaterialModule,
  AccordionModule
],
declarations: [
  NavbarComponent,
  NaoAutorizadoComponent,
  PaginaNaoEncontradaComponent,

],
exports: [
  NavbarComponent
 ],
 providers: [
  JwtHelperService,
  { provide: LOCALE_ID, useValue: 'pt' }
 ],
})
export class CoreModule { }
