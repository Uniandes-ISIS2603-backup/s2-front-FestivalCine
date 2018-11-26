import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  

import { AppComponent } from './app.component';
import {AppRoutingModule} from '../app/app-routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';

import { UsuarioModule } from './usuario/usuario.module';
import {ReservaModule} from './reserva/reserva.module';
import { FuncionModule } from './funcion/funcion.module';
import { TeatroModule } from './teatro/teatro.module';
import {CriticoModule} from './critico/critico.module';
import {PeliculaModule} from './pelicula/pelicula.module';
import {SillaModule} from './silla/silla.module';
import {SalaModule} from './sala/sala.module';
import {FestivalModule} from './festival/festival.module';
import {CalificacionModule} from './calificacion/calificacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalDialogModule.forRoot(),
    NgbModule,
    FormsModule,
    UsuarioModule,
    ReservaModule,
    FuncionModule,
    TeatroModule,
    CriticoModule,
    PeliculaModule,
    SillaModule,
    SalaModule,
    FestivalModule,
    CalificacionModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        BrowserAnimationsModule

    
     
  ],
  providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }
