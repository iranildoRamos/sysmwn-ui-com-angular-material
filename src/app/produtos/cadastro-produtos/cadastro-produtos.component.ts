import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { webserviceqrcode } from './../../../environments/webserviceqrcode';
import { Observable, empty } from 'rxjs';

import { Produto } from 'src/app/core/model';
import { ProdutosService } from './../produtos-service.service';
import { ModeloService } from './../../modelos/modelo.service';
import { MarcaService } from './../../marcas/marca.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { Categoria, Marca, Modelo } from './../../core/model';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutosComponent extends BaseFormComponent
  implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private produtosService: ProdutosService,
    private listaCategorias: CategoriaService,
    private listaMarcas: MarcaService,
    private listaModelos: ModeloService,
    private route: ActivatedRoute
  ) {
    super();
  }
  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  categorias$: Observable<Categoria[]>;
  marcas$: Observable<Marca[]>;
  modelos$: Observable<Modelo[]>;
  produto = new Produto();

  submit() {

    this.produtosService.save(this.formulario.value).subscribe(
      () => {}
      );
    this.resetar();
    }

    ngOnInit() {

      this.route.params
      .pipe(
        map((params: any) => params.codigo),
        switchMap((codigo) => this.produtosService.buscarPorCódigo(codigo))
      )
      .subscribe((produto) => this.updateForm(produto));

      this.categorias$ = this.listaCategorias.list();
      this.marcas$ = this.listaMarcas.list();
      this.modelos$ = this.listaModelos.list();
      this.configurarFormulario();
  }

  configurarFormulario() {
    // tslint:disable-next-line:member-ordering
    this.formulario = this.formBuilder.group({
      codigo: [null],
     dataCadastro: [null, [Validators.required]],
      ean: [null, [Validators.required]],
      serie: [null, [Validators.required]],
      resourceWebServicesQrcode: [null],
      observacoes: [null],

      categoria: this.formBuilder.group({
        codigo: [null],
      }),

      marca: this.formBuilder.group({
        codigo: [null],
      }),

      modelo: this.formBuilder.group({
        codigo: [null],
      }),
    });
  }

  updateForm(dados) {
    this.formulario.patchValue({
      codigo: dados.codigo,
      dataCadastro: dados.dataCadastro,
      ean: dados.ean,
      serie: dados.serie,
      observacoes: dados.observacoes,
      resourceWebServicesQrcode: dados.resourceWebServicesQrcode,
      categoria: dados.categoria,
      marca: dados.marca,
      modelo: dados.modelo,
    });
    console.log(this.formulario.value);
    console.log(dados.dataCadastro);
  }
  popularCampoQrcode() {
    const serie = this.formulario.get('serie').value;

    if (serie != null && serie !== '') {
      this.formulario
        .get('resourceWebServicesQrcode')
        .setValue(
          `${webserviceqrcode.apiUrl}${environment.apiUrl}/produtos/${serie}`
        );
    }
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      produto: {
        dataCadastro: null,
        ean: null,
        serie: null,
        observacoes: null,
        resourceWebServicesQrcode: null,
      },
    });
  }
}
