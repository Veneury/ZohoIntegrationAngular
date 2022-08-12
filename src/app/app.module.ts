import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { CreateClientesComponent } from './clientes/create-clientes/create-clientes.component';
import { DetailsClientesComponent } from './clientes/details-clientes/details-clientes.component';
import { DetailsPosiblesClientesComponent } from './posibles_clientes/details-posibles-clientes/details-posibles-clientes.component';
import { CreatePosiblesClientesComponent } from './posibles_clientes/create-posibles-clientes/create-posibles-clientes.component';
import { ListPosiblesClientesComponent } from './posibles_clientes/list-posibles-clientes/list-posibles-clientes.component';
import { ListTareasComponent } from './tareas/list-tareas/list-tareas.component';
import { CreateTareasComponent } from './tareas/create-tareas/create-tareas.component';
import { DetailsTareasComponent } from './tareas/details-tareas/details-tareas.component';
import { LoginTemplateComponent } from './login/login-template/login-template.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ZohoInterceptor } from './interceptor/Zoho.intercertor';


@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    CreateClientesComponent,
    DetailsClientesComponent,
    DetailsPosiblesClientesComponent,
    CreatePosiblesClientesComponent,
    ListPosiblesClientesComponent,
    ListTareasComponent,
    CreateTareasComponent,
    DetailsTareasComponent,
    LoginTemplateComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZohoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
