import { UsuariosService } from './../../data/services/usuario.service';
import { Usuario } from './../../data/shared/usuario';
import { PropietariosService } from './../../data/services/propietario.service';
import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/data/shared/propietario';
@Component({
  selector: 'app-propietario-management',
  templateUrl: './propietario-management.component.html',
  styleUrls: ['./propietario-management.component.css']
})
export class PropietarioManagementComponent implements OnInit {
  propietario = new Propietario;
  listapropietario: Propietario[];
  listaUsuarios: Usuario[];
  usuarioSelect = new Usuario;
  constructor(private propietarioService: PropietariosService, private usuariosService: UsuariosService) {
    this.listarUsuario();
  }

  ngOnInit(): void {
  }
  change2(select) {
    this.usuarioSelect = select;
  }
  guardarPropietario() {
    console.log(this.propietario);
    console.log(this.usuarioSelect)
    // this.propietarioService.addPropietarios(this.propietario).subscribe(x => console.log(x));
  }

  listarPropeitario() {
    this.propietarioService.getPropietarios().subscribe( x => console.log('propietarios', x));
  }

  listarUsuario() {
    this.usuariosService.getUsuarioss().subscribe(x => {
      console.log('usuarios', x);
      this.listaUsuarios = x;
    });
  }

  change() {
    console.log('entro al change');
  }
}
