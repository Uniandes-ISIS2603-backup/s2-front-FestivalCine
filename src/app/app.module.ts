import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app/app-routing';

import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { FuncionModule } from './funcion/funcion.module';
import { TeatroModule } from './teatro/teatro.module';
import {CriticoModule} from './critico/critico.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsuarioModule,
    FuncionModule,
    TeatroModule,
    CriticoModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
