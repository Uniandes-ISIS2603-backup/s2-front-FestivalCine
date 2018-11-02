import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { AppRoutingModule } from '../app-routing';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

import { ReservaModule } from '../reserva/reserva.module';

@NgModule
(
  {
    imports: 
    [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReservaModule
    ],
    declarations: [UsuarioListComponent, UsuarioDetailComponent],
    providers: [UsuarioService],
    exports:[UsuarioListComponent]
  }
)
export class UsuarioModule { }    

