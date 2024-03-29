import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaService } from './reserva.service';
import { AppRoutingModule } from '../app-routing';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';

import { FuncionModule } from '../funcion/funcion.module';
import { SillaModule } from '../silla/silla.module';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FuncionModule,
    SillaModule
  ],
  declarations: [ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaEditComponent],
  providers: [ReservaService],
  exports:[ReservaListComponent]
})
export class ReservaModule { }
