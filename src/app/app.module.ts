import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { FuncionModule } from './funcion/funcion.module';
import { TeatroModule } from './teatro/teatro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    FuncionModule,
    TeatroModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
