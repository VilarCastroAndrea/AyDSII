import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbCalendar, ModalDismissReasons, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { MascotaService } from 'src/app/data/services/mascota.service';
import { Mascota } from 'src/app/data/shared/mascota';

@Component({
    selector: 'app-signup',
    templateUrl: './new-pet.component.html',
    styleUrls: ['./new-pet.component.scss']
})

export class NewPetComponent {
    
        mascota:Mascota;
    listaMascotas: Array<Mascota>;
   
    fromDate: NgbDate;
    toDate: NgbDate;
    hoveredDate: NgbDate;
    closeResult: string;
    model1: NgbDate;
    model2: NgbDate;

    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    constructor(private modalService: NgbModal, calendar: NgbCalendar, private mascotaService:MascotaService) {
        this.mascota = new Mascota();
        this.listaMascotas = Array<Mascota>();
        this.listaDeMascotas();
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
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
        console.log(this.listaMascotas)
    }
    isDisabled=true;
    botonHablilitado(){
        this.isDisabled=false
    }
    guardarMascota(){
        if(!!this.mascota.edad && !!this.mascota.esterilizado && !!this.mascota.fechaNacimiento && !!this.mascota.nombre && !!this.mascota.raza && !!this.mascota.sexo)
            {
                this.convertir();
                this.mascotaService.addMascota(this.mascota).subscribe(
                (result)=>{
                    alert("Mascota Guardado");
                    this.listaDeMascotas();
                }, 
                (error)=>{
                    console.log("error"+ error);
            });
   this.mascota = new Mascota();
}
// console.log(Object.values(this.mascota.fechaNacimiento))
    }
    convertir(){
        this.mascota.fechaNacimiento=new Date();
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
    isRangeStart(date: NgbDate) {
        return this.model1 && this.model2 && date.equals(this.model1);
    }
    isRangeEnd(date: NgbDate) {
        return this.model1 && this.model2 && date.equals(this.model2);
    }
    isInRange(date: NgbDate) {
        return date.after(this.model1) && date.before(this.model2);
    }
    isActive(date: NgbDate) {
        return date.equals(this.model1) || date.equals(this.model2);
    }
    endDateChanged(date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    }
    startDateChanged(date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    }
}
