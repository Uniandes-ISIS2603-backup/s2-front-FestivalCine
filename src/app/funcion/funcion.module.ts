import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { FuncionListComponent } from './funcion-list/funcion-list.component';
import {FuncionService} from './funcion.service';
import { FuncionDetailComponent } from './funcion-detail/funcion-detail.component';
import { FuncionCreateComponent } from './funcion-create/funcion-create.component';
import {AppRoutingModule} from '../app-routing';
import { FuncionEditComponent } from './funcion-edit/funcion-edit.component';

@NgModule(
{
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  declarations: [FuncionListComponent, FuncionDetailComponent, FuncionCreateComponent, FuncionEditComponent],
  providers: [FuncionService],
  exports: [FuncionListComponent]
})
export class FuncionModule { }
