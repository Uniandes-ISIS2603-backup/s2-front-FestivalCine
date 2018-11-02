import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { SalaListComponent } from './sala-list/sala-list.component';
import {SalaService} from './sala.service';
import { SalaDetailComponent } from './sala-detail/sala-detail.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [SalaListComponent, SalaDetailComponent],
  providers: [SalaService],
  exports: [SalaListComponent]
})
export class SalaModule { }
