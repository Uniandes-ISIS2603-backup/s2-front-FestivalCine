import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {CriticoListComponent} from '../app/critico/critico-list/critico-list.component';
import {FuncionListComponent} from '../app/funcion/funcion-list/funcion-list.component';
import {TeatroListComponent} from '../app/teatro/teatro-list/teatro-list.component';
import {UsuarioListComponent} from '../app/usuario/usuario-list/usuario-list.component';
import {ReservaListComponent} from '../app/reserva/reserva-list/reserva-list.component';
import{SillaListComponent} from '../app/silla/silla-list/silla-list.component';
import {SillaDetailComponent} from '../app/silla/silla-detail/silla-detail.component';
import {PeliculaListComponent} from '../app/pelicula/pelicula-list/pelicula-list.component';
const routes: Routes = [
    {
        path: 'criticos',
        children: [
            {
                path: 'list',
                component:CriticoListComponent
            }
        ]
    },
    {
        path: 'funciones',
        children: [
            {
                path: 'list',
                component:FuncionListComponent
            }
        ]
    },
    {
        path: 'teatros',
        children: [
            {
                path: 'list',
                component:TeatroListComponent
            }
        ]
    },
    {
        path: 'usuarios',
        children: [
            {
                path: 'list',
                component:UsuarioListComponent
            }
        ]
    },
    {
        path: 'reservas',
        children: [
            {
                path: 'list',
                component:ReservaListComponent
            }
        ]
    },
    {
        path: 'peliculas',
        children: [
            {
                path: 'list',
                component:PeliculaListComponent
            }
        ]
    },
    {
        path:'sillas',
        children:[
            {
                path:'list',
                component:SillaListComponent
            },
            {
                path:'id',
                component:SillaDetailComponent
            }
        ]
    }
    
 
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule{
    
}