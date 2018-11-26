import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing';
import { FestivalListComponent } from './festival-list/festival-list.component';
import { FestivalDetailComponent } from './festival-detail/festival-detail.component';
import {FestivalService} from './festival.service';
import { FestivalCreateComponent } from './festival-create/festival-create.component';
import {CriticoModule} from '../critico/critico.module';
import {TeatroModule} from '../teatro/teatro.module';
import { FestivalEditComponent } from './festival-edit/festival-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      CriticoModule,
      TeatroModule,
      NgbModule
  ],
  declarations: [FestivalListComponent, FestivalDetailComponent, FestivalCreateComponent, FestivalEditComponent],
  providers: [FestivalService],
  exports:[FestivalListComponent]
})
export class FestivalModule { }
