export class Categoria {
  codigo: number;
  nome: string;
}

export class Marca {
  codigo: number;
  nome: string;
}

export class Modelo {
  codigo: number;
  nome: string;
}

export class Produto {
  codigo: number;
  dataCadastro: Date;
  ean: string;
  serie: string;
  resourceWebServicesQrcode: string;
  observacoes: string;
  categoria = new Categoria();
  marca = new Marca();
  modelo = new Modelo();
}
