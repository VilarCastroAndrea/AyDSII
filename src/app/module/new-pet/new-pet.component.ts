import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbCalendar, ModalDismissReasons, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { MascotaService } from 'src/app/data/services/mascota.service';
import { Mascota } from 'src/app/data/shared/mascota';
import { PropietariosService } from 'src/app/data/services/propietario.service';
import { Propietario } from 'src/app/data/shared/propietario';
@Component({
    selector: 'app-signup',
    templateUrl: './new-pet.component.html',
    styleUrls: ['./new-pet.component.scss']
})

export class NewPetComponent {
    listpropietario: Propietario[];
    propietario: Propietario;
    mascota: Mascota;
    listaMascotas: Array<Mascota>;
    fromDate: NgbDate;
    toDate: NgbDate;
    closeResult: string;
    model1: NgbDate;
    model2: NgbDate;
    isDisabled = true;
    focus;
    focus1;
    focus2;
    focus3;
    focus4;

    constructor(private modalService: NgbModal, calendar: NgbCalendar, private propietariosService: PropietariosService,
        private mascotaService: MascotaService) {
        this.mascota = new Mascota();
        this.listaMascotas = Array<Mascota>();
        this.listaDeMascotas();
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.listaDeUsuario();
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
        );
        console.log(this.listaMascotas);
    }
    listaDeUsuario() {
        this.propietariosService.getPropietarios().subscribe(response => {
            this.listpropietario = response;
        });
    }
    botonHablilitado(e) {
        if (!!e._id) {this.propietario = e; }
        if (!this.mascota.esterilizado) { this.mascota.esterilizado = false; }
        if (!!this.mascota.nombre && !!this.mascota.sexo && !!this.mascota.raza && !!this.mascota.edad
            && !!this.mascota.fechaNacimiento && !!this.propietario) {
            if (this.mascota.nombre.length > 0 && this.mascota.sexo.length > 0 && this.mascota.raza.length > 0 && this.mascota.edad >= 0) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        }
    }
    guardarMascota() {
        this.mascota.propietario = this.propietario;
            this.convertir();
            this.mascotaService.addMascota(this.mascota).subscribe(
                (result) => {
                    alert("Mascota Guardado");
                    this.listaDeMascotas();
                },
                (error) => {
                    console.log("error" + error);
                });
            this.mascota = new Mascota();
    }
    convertir() {
        this.mascota.fechaNacimiento = new Date();
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
