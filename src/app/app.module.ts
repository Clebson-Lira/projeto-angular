import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { PessoaDetailComponent } from './components/pessoa-detail/pessoa-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './service/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './guards/login.guard';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    PessoaDetailComponent,
    LoginComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule
  ],
  providers: [LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
