import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  cols = 2;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Usuário inválido' :
    this.email.hasError('email') ? 'Informe um usuário válido' :
    '';
  }
  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }

    ngOnInit() {
      // set cols
      this.cols = 1;
    }

    login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/produtos']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

}
