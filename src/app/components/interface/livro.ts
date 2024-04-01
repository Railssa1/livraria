export interface Livro {
  id?: number;
  titulo: string;
  preco: number;
  autor?: string;
  urlImage: string;
  resumo?: string;
  quantidade?: number;
}
