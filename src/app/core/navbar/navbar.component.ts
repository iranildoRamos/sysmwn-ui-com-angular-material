import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from './../../seguranca/auth.guard';
import { ErrorHandlerService } from './../error-handler.service';
import { LogoutService } from './../../seguranca/logout.service';
import { AuthService } from './../../seguranca/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    public auth: AuthService,
    public authGuard: AuthGuard,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authGuard.isLoggedIn;
  }

  logout() {
    this.isLoggedIn$ = this.authGuard.isLoggedIn;
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
