export class Mascota {
    _id: String;
    nombre:String;
    raza:String;
    sexo: String;
    edad:Number;
    esterilizado:String;
    fechaNacimiento: Date;

    constructor(nombre?:String,raza?:String,sexo?: String,edad?:Number,esterilizado?:String,fechaNacimiento?: Date){
       this.nombre = nombre;
       this.sexo = sexo;
       this.raza = raza;
       this.edad = edad;
       this.esterilizado = esterilizado;
       this.fechaNacimiento = fechaNacimiento;

    }

}
