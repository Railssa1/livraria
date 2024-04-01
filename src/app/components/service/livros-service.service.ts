import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../interface/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosServiceService {
  API = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API);
  }

  getBook(id: number): Observable<Livro> {
    const url = `${this.API}/${id}`;
    return this.http.get<Livro>(url);
  }

  cadastrar(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(this.API, livro);
  }
}
