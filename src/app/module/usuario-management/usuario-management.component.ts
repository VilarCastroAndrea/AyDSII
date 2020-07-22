import { Usuario } from './../../data/shared/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuariosService} from '../../data/services/usuario.service';
@Component({
  selector: 'app-usuario-management',
  templateUrl: './usuario-management.component.html',
  styleUrls: ['./usuario-management.component.css']
})
export class UsuarioManagementComponent implements OnInit {
  usuario = new Usuario;
  disabled = true;
  listUsuario: Usuario[];
  constructor(private usuarioService: UsuariosService) { 
    this.listarUsuario();
  }

  ngOnInit(): void {
  }
  change(){
    if(!!this.usuario.nombreUsuario && !!this.usuario.password && !!this.usuario.perfil) {
      if(this.usuario.nombreUsuario.length > 3 && this.usuario.password.length > 3 && this.usuario.perfil.length > 3) {
        this.disabled = false;
      }else{ this.disabled = true; }
    }else{ this.disabled = true; }
  }
  guardarUsuario(){
    this.usuarioService.addUsuarios(this.usuario).subscribe(x => console.log(x))
  }
  listarUsuario(){
    this.usuarioService.getUsuarioss().subscribe(x => {
      this.listUsuario = x;
      console.log(x);
    });
  }

}
