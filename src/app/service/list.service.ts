import { Injectable } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Pessoa>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Pessoa[]>{
    return  this.http.get<Pessoa[]>(this.apiUrl)

  }

  getItem(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`)
  }

  loadById(id: number){
    return this.http.get(`${this.apiUrl}/${id}`).pipe(take(1));
  }

  create(pessoa: Pessoa){
    return this.http.post(this.apiUrl, pessoa).pipe(take(1));
  }

  update(pessoa: Pessoa){
    return this.http.put(`${this.apiUrl}/${pessoa.id}`, pessoa).pipe(take(1));
  }

}


