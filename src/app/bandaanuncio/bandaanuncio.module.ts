import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { BandaAnuncioListComponent } from './bandaanuncio-list/bandaanuncio-list.component';
import { BandaAnuncioDetailComponent } from './bandaanuncio-detail/bandaanuncio-detail.component';
import { BandaAnuncioService } from './bandaanuncio.service';


@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [BandaAnuncioListComponent],
  providers: [BandaAnuncioService],
  exports:[BandaAnuncioListComponent]
})
export class BandaAnuncioModule { }
