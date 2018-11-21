import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { SalaListComponent } from './sala-list/sala-list.component';
import {SalaService} from './sala.service';
import { SalaDetailComponent } from './sala-detail/sala-detail.component';
import { SalaCreateComponent } from './sala-create/sala-create.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [SalaListComponent, SalaDetailComponent, SalaCreateComponent],
  providers: [SalaService],
  exports: [SalaListComponent]
})
export class SalaModule { }
