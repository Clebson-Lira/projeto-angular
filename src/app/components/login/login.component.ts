import { Usuario } from './usuario';
import { Component } from '@angular/core';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService){

  }

  fazerLogin(){
    this.loginService.fazerLogin(this.usuario);
  }

}
