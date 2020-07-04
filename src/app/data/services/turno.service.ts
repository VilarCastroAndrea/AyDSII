import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../shared/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  urlBase:string ="http://localhost:3000/api/turno/";

  constructor(private _http:HttpClient) { 

  }

  getTurnos():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.get(this.urlBase , httpOptions );
  }

  addTurno(turno:Turno):Observable<any>{
    console.log("entro al service add turno"); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(turno);
    return this._http.post(this.urlBase,body,httpOptions);
  }


  deleteTurno(turno:Turno):Observable<any>{
    console.log("eliminar service");
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.delete(this.urlBase + turno._id, httpOptions );
  }


}
