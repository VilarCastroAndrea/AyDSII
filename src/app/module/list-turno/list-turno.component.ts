import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/data/shared/turno';
import { TurnoService } from 'src/app/data/services/turno.service';

@Component({
  selector: 'app-list-turno',
  templateUrl: './list-turno.component.html',
  styleUrls: ['./list-turno.component.css']
})
export class ListTurnoComponent implements OnInit {

  listaTurnos:Array<Turno>;
  listaTurnosConfirmados:Array<Turno>;
  listaTurnosNoConfirmados:Array<Turno>;

  turno:Turno;
  constructor(private turnoService:TurnoService) {
    this.listaTurnos = new Array<Turno>();
    this.listaTurnosConfirmados = new Array<Turno>(); 
    this.listaTurnosNoConfirmados = new Array<Turno>();
    this.turno = new Turno();
    this.getTurnos();
   }

  


  getTurnos(){
    this.listaTurnos = new Array<Turno>();
    this.turnoService.getTurnos().subscribe(
      (result)=> {
        var t : Turno = new Turno();
        result.forEach(element => {
          Object.assign(t, element);
          this.listaTurnos.push(t);
          t = new Turno();
        });
        this.getTurnosConfirmados();

      },
      (error)=>{

        console.log(error);
      }
    )
  }

  getTurnosConfirmados(){
     this.listaTurnosNoConfirmados = new Array<Turno>();
     this.listaTurnosNoConfirmados = this.listaTurnos.filter(turno => turno.estado == false);
     console.log("TURNOOOOOOS : "+ this.listaTurnosNoConfirmados.length);

    this.listaTurnosConfirmados = new Array<Turno>();
    this.listaTurnosConfirmados = this.listaTurnos.filter(turno => turno.estado == true);
  }

   confirmarTurno(t:Turno){
    var tt = new Turno();
    Object.assign(tt, t);
    this.turno = tt;
    this.turno.estado = true;
    this.turnoService.updateTurno(this.turno).subscribe(
       (result)=>{
           alert("Turno Confirmado");
           this.getTurnos();
       },
       (error)=>{
         console.log(error);
       }
    )
   }


  ngOnInit(): void {
  }

}
