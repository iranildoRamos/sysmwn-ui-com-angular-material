import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { JwtHttpInterceptor } from './seguranca/jwt-http-interceptor';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

registerLocaleData(localeBr, 'pt');

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
    SegurancaModule

    ],
  providers: [

    JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'pt' }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
