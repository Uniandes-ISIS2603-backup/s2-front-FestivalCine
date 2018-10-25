import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [PeliculaListComponent],
  exports:[PeliculaListComponent]
})
export class PeliculaModule { }
