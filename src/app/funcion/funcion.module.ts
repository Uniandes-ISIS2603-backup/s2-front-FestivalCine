import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { FuncionListComponent } from './funcion-list/funcion-list.component';
import {FuncionService} from './funcion.service';

@NgModule(
{
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [FuncionListComponent],
  providers: [FuncionService]
})
export class FuncionModule { }
