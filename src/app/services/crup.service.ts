import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crup } from '../models/crup';

@Injectable({
  providedIn: 'root'
})
export class CrupService {

  private baseEndPoint: string = 'http://localhost:8080/api/crup/';
  private cabezera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  public listar(): Observable<Crup[]> {
    return this.http.get<Crup[]>(this.baseEndPoint);
  }

  public crear(crud: Crup): Observable<Crup>{
    return this.http.post<Crup>(this.baseEndPoint, crud,
      { headers : this.cabezera });
  }
}
