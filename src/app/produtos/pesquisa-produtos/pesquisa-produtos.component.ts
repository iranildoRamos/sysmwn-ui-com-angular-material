import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Produto } from 'src/app/core/model';
import { ProdutosService } from './../produtos-service.service';

@Component({
  selector: 'app-pesquisa-produtos',
  templateUrl: './pesquisa-produtos.component.html',
  styleUrls: ['./pesquisa-produtos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})

export class PesquisaProdutosComponent implements OnInit {

  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource<Produto>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  columnsToDisplay = [
    'dataCadastro',
    'ean',
    'serie',
    'observacoes'];

  expandedElement: Produto | null;

  produtos: Produto[];

  // produtos$: Observable<Produto[]>;

  inscricao: Subscription;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) {

    }

  ngOnInit() {
    this.onRefresh();
  }

onDelete(produto) {
  this.produtoService.remove(produto).subscribe(()=>{});
  this.onRefresh();
}
onEdite(produto) {
  this.router.navigate(['editar', produto], { relativeTo: this.route });
}
  onRefresh() {
    this.produtoService.list().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });

  }
    handleError() {
    throw new Error('Erro ao carregar produtos. Tente novamente mais tarde.');
  }

}
