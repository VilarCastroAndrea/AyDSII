import { Mascota } from './../../data/shared/mascota';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TurnoService } from 'src/app/data/services/turno.service';
import { MascotaService } from 'src/app/data/services/mascota.service';
import { Turno } from 'src/app/data/shared/turno';
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
    motivo: string;
    listaMascotas: Array<Mascota>;
  focus;
  focus1;

  closeResult: string;

  ngOnInit() {
  }

  onEnter(e){
console.log(e)
  }
  isDisabled(){
      return !this.motivo.length
  }
  constructor(private modalService: NgbModal,private turnoService:TurnoService,
    private mascotaService :MascotaService) {
this.listaDeMascotas();
  }
  agregarTurno(){
    // this.turnoService.addTurno()
  }
  listaDeMascotas(){
    this.listaMascotas = new Array<Mascota>();
    this.mascotaService.getMascotas().subscribe(
      (result)=>{
          console.log('result',result)
        var masc: Mascota = new Mascota();
        result.forEach(element => {
          Object.assign(masc,element);
          this.listaMascotas.push(masc);
          masc = new Mascota();
          });
      },
      (error)=>{
        console.log(error);
      }
    )
    console.log('listaMascotas',this.listaMascotas)
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
