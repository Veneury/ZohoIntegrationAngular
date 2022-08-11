import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientesComponent } from './clientes/create-clientes/create-clientes.component';
import { HomeComponent } from './home/home.component';
import { CreatePosiblesClientesComponent } from './posibles_clientes/create-posibles-clientes/create-posibles-clientes.component';

const routes: Routes = [
  //Home Routes
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  //Clientes Routes
  { path: 'clientes/create', component: CreateClientesComponent },

  //Posibles Clientes Routes
  { path: 'posibles_clientes/create', component: CreatePosiblesClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
