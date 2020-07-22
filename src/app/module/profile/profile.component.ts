import { MascotaService } from 'src/app/data/services/mascota.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/data/shared/mascota';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    id: string = '';
    closeResult: string;
    mascota;
    listMascota: Mascota[] = [];
    esterilizado;
    focus;
    focus1;
    focus2;
    focus3;
    focus4;

    constructor(private mascotaService: MascotaService, private route: ActivatedRoute) {
    }

    getMascota(params) {
        this.mascotaService.getMascotas().subscribe(x => {
            this.mascota = x.filter(resp => resp._id === params)[0];
            this.esterilizado = (this.mascota.esterilizado === 'true')? 'si' : 'No';
            console.log('getMAscota', params);
        });
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.getMascota(params.get('id'));
    });
    }

    open(content, type, modalDimension) {
        // if (modalDimension === 'sm' && type === 'modal_mini') {
        //     this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // } else if (modalDimension === '' && type === 'Notification') {
        //     this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // } else {
        //     this.modalService.open(content, { centered: true }).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // }
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
