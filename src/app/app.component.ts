import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';

  mostrarMenu: boolean = false;
  mostrarFooter: boolean = false;

  constructor(private loginService: LoginService){

  }

  ngOnInit(){
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.loginService.mostrarFooterEmitter.subscribe(
      mostarf => this.mostrarFooter = mostarf
    );
  }
}
