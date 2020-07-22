import { Propietario } from './propietario';
export class Mascota {
    _id: String;
    nombre: String;
    raza: String;
    sexo: String;
    edad: Number;
    esterilizado: boolean;
    fechaNacimiento: Date;
    propietario: Propietario;
    
    constructor(nombre?: String, raza?: String, sexo?: String, edad?: Number, esterilizado?: boolean, fechaNacimiento?: Date, 
        propietario?: Propietario) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.raza = raza;
        this.edad = edad;
        this.esterilizado = esterilizado;
        this.fechaNacimiento = fechaNacimiento;
        this.propietario = propietario;
    }

}
