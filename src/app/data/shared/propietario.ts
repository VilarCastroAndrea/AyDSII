import { Usuario } from './usuario';
export class Propietario {
    _id: string;
    nombre: string;
    apellido: string;
    domicilio: string;
    email: string;
    telefono: string;
    usuario: Usuario;

    constructor(nombre?: string, apellido?: string, domicilio?: string, email?: string, telefono?: string, usuario?: Usuario) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.domicilio = domicilio;
       this.email = email;
       this.telefono = telefono;
       this.usuario = usuario;
    }

}
