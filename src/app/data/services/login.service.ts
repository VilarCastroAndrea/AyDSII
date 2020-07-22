import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userIsUsuario: boolean = false;
  userIsAdministrador: boolean = false;
  userLoggedIn: boolean = false;
  userLogged: Usuario;

 constructor(private _http:HttpClient) { }
 public login(username: String, password: String):Observable<any> {
 const httpOption = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json'
 })
 }
 let body = JSON.stringify({ nombreUsuario: username, password: password });
 return this._http.post('http://localhost:3000/api/usuario/login', body,
httpOption);
 }



 public logout() {
 // reseteo las propiedades del service que indican
 // que un usuari esta logueado y cual es el usuario logueado
 this.userLogged = new Usuario();
 this.userLoggedIn = false;
 } 





}
