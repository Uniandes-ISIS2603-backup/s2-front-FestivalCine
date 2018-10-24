import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaService } from './reserva.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [ReservaListComponent],
  providers: [ReservaService],
  exports:[ReservaListComponent]
})
export class ReservaModule { }
