import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coat } from '../models/coat';

@Injectable({
  providedIn: 'root'
})
export class DbcoatService {
  constructor(private http: HttpClient) { }
  public getCoats(): Observable<Coat[]> {
    return this.http.get<Coat[]>('./assets/database/coat/coats.json');
  }
}