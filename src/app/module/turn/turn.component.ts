import { Mascota } from './../../data/shared/mascota';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TurnoService } from 'src/app/data/services/turno.service';
import { MascotaService } from 'src/app/data/services/mascota.service';
import { Turno } from 'src/app/data/shared/turno';
import { LoginService } from 'src/app/data/services/login.service';
// import { TurnoService } from '../../data/services/turno.service';
// import { MascotaService } from '../../data/services/mascota.service';
// import { Turno } from '../../data/shared/turno';
// import { Mascota } from '../../data/shared/mascota';
@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {
  date = new Date().setDate(new Date().getDate() + 2);
  listaMascotas: Array<Mascota>;
  focus;
  focus1;
  turno: Turno={
    _id:null,
    fecha:new Date(),
    mascota: new Mascota(),
     motivo:'',
     estado: false
  };
  closeResult: string;
  isDisabled = true;
  mascota;
  ngOnInit() {
  }

  botonHabilitado() {
    if (!!this.turno.motivo && !!this.turno.mascota.nombre) {
      if (this.turno.motivo.length > 0) {
        this.isDisabled = false;
        } else {
          this.isDisabled = true;
        }
    }
  }
  constructor(private modalService: NgbModal, private turnoService: TurnoService,
    private mascotaService: MascotaService,public loginService: LoginService) {
    this.listaDeMascotas();
  }

  guardarTurno(){
    this.turno.fecha = new Date(this.date);
    this.turno.estado = false;
    this.turnoService.addTurno(this.turno).subscribe(
    (result)=>{
        alert("Turno Guardada");
    }, 
  (error)=>{
        console.log("error"+ error);
  })
  this.turno = new Turno();
  }

  listaDeMascotas() {
    this.listaMascotas = new Array<Mascota>();
    this.mascotaService.getMascotas().subscribe(
      (result) => {
        console.log('result', result)
        var masc: Mascota = new Mascota();
        result.forEach(element => {

          Object.assign(masc, element);
          this.listaMascotas.push(masc);
          masc = new Mascota();
        
        });
      },
      (error) => {
        console.log(error);
      }
    )
    console.log('listaMascotas', this.listaMascotas)
  }
  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
