import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propietario } from './../shared/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
  urlBase = 'http://localhost:3000/api/propietario/';

  constructor(private _http: HttpClient) {
  }

  getPropietarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.get(this.urlBase , httpOptions );
  }

  addPropietarios(propietario: Propietario): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(propietario);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  deletePropietario(propietario: Propietario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase + propietario._id, httpOptions );
  }

  updatePropietario(propietario: Propietario): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(propietario);
    return this._http.put(this.urlBase + propietario._id, body, httpOptions);
  }


}
