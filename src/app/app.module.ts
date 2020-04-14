import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { CoreModule } from './core/core.module';
import { JwtHttpInterceptor } from './seguranca/jwt-http-interceptor';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SegurancaModule,
    MaterialModule

    ],
  providers: [

    {provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true},
    JwtHelperService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
