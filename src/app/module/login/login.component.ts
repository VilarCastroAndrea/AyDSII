import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/data/shared/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/data/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;


  userform: Usuario = new Usuario();
  returnUrl: string;

  usuario: String;
  password: String;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService) {
      this.userform = new Usuario();

     }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/turn'; 
  }


  login() {
    this.loginService.login(this.userform.nombreUsuario, this.userform.password)
    .subscribe(
    (result) => {
    var user = result;
    console.log(user);
    if (user.status == 1){
    //vbles para mostrar-ocultar cosas en el header
         this.loginService.userLoggedIn = true;
          this.loginService.userLogged = user;
           
          if(user.perfil == "usuario"){
            this.loginService.userIsUsuario = true;
            this.loginService.userIsAdministrador = false;

          }else {
            this.loginService.userIsUsuario = false;
            this.loginService.userIsAdministrador =true;
          }


          alert("Exito");
    //redirigimos a home o a pagina que llamo
     this.router.navigateByUrl(this.returnUrl);
    } else {
    //usuario no encontrado muestro mensaje en la vista
    //this.msglogin="Credenciales incorrectas..";
     alert("No se encontro el usuario"); 
  }
    },
    error => {
    console.log("error en conexion");
    console.log(error);
    });
    }




}
