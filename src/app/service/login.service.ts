import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../components/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new  EventEmitter<boolean>();
  mostrarFooterEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'clebson' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.mostrarFooterEmitter.emit(true);
      this.router.navigate(['home']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.mostrarFooterEmitter.emit(false);
      alert("login invalido")
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
