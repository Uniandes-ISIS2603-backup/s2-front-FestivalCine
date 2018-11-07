import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FuncionListComponent } from './funcion-list/funcion-list.component';
import {FuncionService} from './funcion.service';
import { FuncionDetailComponent } from './funcion-detail/funcion-detail.component';
import { FuncionCreateComponent } from './funcion-create/funcion-create.component';
import {AppRoutingModule} from '../app-routing';

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
  declarations: [FuncionListComponent, FuncionDetailComponent, FuncionCreateComponent],
  providers: [FuncionService],
  exports: [FuncionListComponent]
})
export class FuncionModule { }
