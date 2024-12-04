import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { PessoaDetailComponent } from './components/pessoa-detail/pessoa-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'list', component: ListComponent, canActivate: [LoginGuard]},
  {path: 'list/nova', component: PessoaFormComponent, canActivate: [LoginGuard]},
  {path: 'list/edit', component: PessoaFormComponent, canActivate: [LoginGuard]},
  {path: 'list/:id', component: PessoaDetailComponent, canActivate: [LoginGuard]},
  {path: 'list/edit/:id', component: PessoaFormComponent, canActivate: [LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
