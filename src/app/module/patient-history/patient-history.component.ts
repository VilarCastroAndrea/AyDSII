import { MascotaService } from 'src/app/data/services/mascota.service';
import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/data/shared/mascota';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
mascota = new Mascota;
listMascota;

  constructor(private mascotaService: MascotaService) {
   }



getMascota() {
  this.mascotaService.getMascotas().subscribe(x => {
    this.listMascota = x.filter( x => x.propietario );
    console.log('getMAscota', x);
  });
}
historialClinico(e) {
console.log(e);
}
  ngOnInit(): void {
      this.getMascota();
  }

}
