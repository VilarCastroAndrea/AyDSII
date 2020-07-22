import { Mascota } from './mascota';

export class Turno {

   _id: String;
   fecha: Date;
   motivo: String;
   mascota: Mascota;

   constructor(fecha?: Date, motivo?: String, mascota?: Mascota) {
    this.fecha = fecha;
    this.motivo = motivo;
    this.mascota = new Mascota();
   }
}
