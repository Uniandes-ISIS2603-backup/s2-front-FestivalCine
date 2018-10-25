import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {AppRoutingModule} from '../app/app-routing';

import { UsuarioModule } from './usuario/usuario.module';
import {ReservaModule} from './reserva/reserva.module';
import { FuncionModule } from './funcion/funcion.module';
import { TeatroModule } from './teatro/teatro.module';
import {CriticoModule} from './critico/critico.module';
import {PeliculaModule} from './pelicula/pelicula.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsuarioModule,
    ReservaModule,
    FuncionModule,
    TeatroModule,
    CriticoModule,
    PeliculaModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
