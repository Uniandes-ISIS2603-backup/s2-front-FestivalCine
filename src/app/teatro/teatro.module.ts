import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { TeatroListComponent } from './teatro-list/teatro-list.component';
import { TeatroDetailComponent } from './teatro-detail/teatro-detail.component';
import { TeatroService } from './teatro.service';
import { TeatroCreateComponent } from './teatro-create/teatro-create.component';
import { SalaModule } from '../sala/sala.module';
import { FuncionModule } from '../funcion/funcion.module';
import { TeatroEditComponent } from './teatro-edit/teatro-edit.component';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FuncionModule,
    SalaModule
  ],
  declarations: [TeatroListComponent, TeatroDetailComponent, TeatroCreateComponent, TeatroEditComponent],
  providers: [TeatroService],
  exports:[TeatroListComponent]
})
export class TeatroModule { }
