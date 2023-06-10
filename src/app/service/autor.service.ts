import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  public url : string;

  constructor(public httpClient : HttpClient) {
    this.url = 'http://service08-001-site1.ctempurl.com/api/Authors';
  }

  public getAll() : Observable<any>{
    return this.httpClient.get(this.url);
  }
}
