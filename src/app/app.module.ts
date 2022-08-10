import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosiblesClientesComponent } from './posibles-clientes/posibles-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TareasComponent } from './tareas/tareas.component';
import { EnviarCorreoComponent } from './enviar-correo/enviar-correo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PosiblesClientesComponent,
    ClientesComponent,
    TareasComponent,
    EnviarCorreoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
