import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { FuncionListComponent } from './funcion-list/funcion-list.component';
import {FuncionService} from './funcion.service';
import { FuncionDetailComponent } from './funcion-detail/funcion-detail.component';

@NgModule(
{
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [FuncionListComponent, FuncionDetailComponent],
  providers: [FuncionService],
  exports: [FuncionListComponent]
})
export class FuncionModule { }
