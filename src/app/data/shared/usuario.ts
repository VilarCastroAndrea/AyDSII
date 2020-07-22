export class Usuario {
    _id: String;
    nombreUsuario: String;
    password: String;
    perfil: String;

    constructor(_id?: String, nombreUsuario?: String, password?: String, perfil?: String ) {
        this._id = _id;
        this.nombreUsuario = nombreUsuario;
        this.perfil = perfil;
        this.password = password;
    }

}
