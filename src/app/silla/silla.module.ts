import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { SillaListComponent } from './silla-list/silla-list.component';
import { SillaDetailComponent } from './silla-detail/silla-detail.component';
import { SillaCreateComponent } from './silla-create/silla-create.component';
import { SillaService } from './silla.service';


@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [SillaListComponent, SillaDetailComponent, SillaCreateComponent],
  providers: [SillaService],
  exports:[SillaListComponent]
})
export class SillaModule { }