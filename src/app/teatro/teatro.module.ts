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

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [TeatroListComponent, TeatroDetailComponent, TeatroCreateComponent],
  providers: [TeatroService],
  exports:[TeatroListComponent]
})
export class TeatroModule { }
