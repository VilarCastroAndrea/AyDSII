import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlBase = 'http://localhost:3000/api/usuario/';

  constructor(private _http: HttpClient) {
  }

  getUsuarioss(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.get(this.urlBase , httpOptions );
  }

  addUsuarios(usuario: Usuario): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(usuario);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  deleteUsuario(usuario: Usuario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase + usuario._id, httpOptions );
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(usuario);
    return this._http.put(this.urlBase + usuario._id, body, httpOptions);
  }


}
