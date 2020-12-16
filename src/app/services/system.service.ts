import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  urlLogin = `${environment.apiUrl}/user/login`;
  urlPlaca = 'vehicle/plate';
  urlLista = 'vehicle/listConsult'



  constructor(

    private http: HttpClient

  ) { }


  getLogin(request) {
    return this.http.post(this.urlLogin, request);
  }

  getPlaca(request, token) {

    const opts = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }

    return this.http.get((`${environment.apiUrl}/${this.urlPlaca}/${request}`), opts);
  }


  getListByConsult(token) {

    const arr = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }

    return this.http.get((`${environment.apiUrl}/${this.urlLista}`), arr);

  }

}
