import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from './../shared/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  urlBase = 'http://localhost:3000/api/mascota/';

  constructor(private _http: HttpClient) { }

  getMascotas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.get(this.urlBase , httpOptions );
  }

  addMascota(mascota: Mascota): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(mascota);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  deleteMascota(mascota: Mascota): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.delete(this.urlBase + mascota._id, httpOptions );
  }

  updateMascota(mascota: Mascota): Observable<any> {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(mascota);
    return this._http.put(this.urlBase + mascota._id, body, httpOptions);
  }

}
