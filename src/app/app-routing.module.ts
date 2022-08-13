import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientesComponent } from './clientes/create-clientes/create-clientes.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { HomeComponent } from './home/home.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { NotesComponent } from './notes/notes.component';
import { CreatePosiblesClientesComponent } from './posibles_clientes/create-posibles-clientes/create-posibles-clientes.component';
import { ListPosiblesClientesComponent } from './posibles_clientes/list-posibles-clientes/list-posibles-clientes.component';
import { CreateTareasComponent } from './tareas/create-tareas/create-tareas.component';
import { ListTareasComponent } from './tareas/list-tareas/list-tareas.component';

const routes: Routes = [
  //Home Routes
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  //Clientes Routes
  { path: 'clientes/create', component: CreateClientesComponent },
  { path: 'clientes/list', component: ListClientesComponent },

  //Posibles Clientes Routes
  { path: 'posibles_clientes/create', component: CreatePosiblesClientesComponent },
  { path: 'posibles_clientes/list', component: ListPosiblesClientesComponent },

  //Tareas Routes
  { path: 'tareas/create', component: CreateTareasComponent },
  { path: 'tareas/list', component: ListTareasComponent },
  { path: 'notas/list', component: NotesComponent },
  { path: 'notas/create', component: AddNotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
