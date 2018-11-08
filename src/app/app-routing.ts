import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {CriticoListComponent} from '../app/critico/critico-list/critico-list.component';
import {FuncionListComponent} from '../app/funcion/funcion-list/funcion-list.component';
import {FuncionDetailComponent} from '../app/funcion/funcion-detail/funcion-detail.component';
import {TeatroListComponent} from '../app/teatro/teatro-list/teatro-list.component';
import {UsuarioListComponent} from '../app/usuario/usuario-list/usuario-list.component';
import {UsuarioDetailComponent} from '../app/usuario/usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from '../app/usuario/usuario-create/usuario-create.component';
import {ReservaListComponent} from '../app/reserva/reserva-list/reserva-list.component';
import {ReservaDetailComponent} from '../app/reserva/reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from '../app/reserva/reserva-create/reserva-create.component';
import{SillaListComponent} from '../app/silla/silla-list/silla-list.component'
import {SillaDetailComponent} from '../app/silla/silla-detail/silla-detail.component';
import {PeliculaListComponent} from '../app/pelicula/pelicula-list/pelicula-list.component';
import {PeliculaDetailComponent} from '../app/pelicula/pelicula-detail/pelicula-detail.component';

import {BandaAnuncioListComponent} from '../app/bandaanuncio/bandaanuncio-list/bandaanuncio-list.component';
import {BandaAnuncioDetailComponent} from '../app/bandaanuncio/bandaanuncio-detail/bandaanuncio-detail.component';


import{SalaListComponent} from '../app/sala/sala-list/sala-list.component';
import{SalaDetailComponent} from '../app/sala/sala-detail/sala-detail.component';
import {FestivalListComponent} from '../app/festival/festival-list/festival-list.component';
import {SalaCreateComponent} from '../app/sala/sala-create/sala-create.component'
import {FuncionCreateComponent} from '../app/funcion/funcion-create/funcion-create.component';
import {CriticoDetailComponent} from '../app/critico/critico-detail/critico-detail.component';
import {CalificacionListComponent} from '../app/calificacion/calificacion-list/calificacion-list.component';
import {CalificacionDetailComponent} from '../app/calificacion/calificacion-detail/calificacion-detail.component';
import {FestivalDetailComponent} from '../app/festival/festival-detail/festival-detail.component';
import {FestivalCreateComponent} from '../app/festival/festival-create/festival-create.component';
import {TeatroDetailComponent} from '../app/teatro/teatro-detail/teatro-detail.component';
import {TeatroCreateComponent} from '../app/teatro/teatro-create/teatro-create.component';
import {CriticoCreateComponent} from '../app/critico/critico-create/critico-create.component';
import {CalificacionCreateComponent} from '../app/calificacion/calificacion-create/calificacion-create.component';

const routes: Routes = [
    {
         path: 'criticos',
        children: [
            {
                path: 'list',
                component:CriticoListComponent
            },
            {
                path: ':id',
                component: CriticoDetailComponent
            },
            {
                path: 'add',
                component: CriticoCreateComponent
            }
        ]
    },
    {
        path: 'calificaciones',
        children: [
            {
                path: 'list',
                component: CalificacionListComponent
            },
            {
                path: ':id',
                component: CalificacionDetailComponent
            },
            {
                path: 'add',
                component: CalificacionCreateComponent
            }
        ]
    },
    {
        path: 'funciones',
        children: [
            {
                path: 'list',
                component:FuncionListComponent
            },   
            {
                path:'add',
                component: FuncionCreateComponent
            },  
            {
                path: ':id',
                component:FuncionDetailComponent
            }        
        ]
    },

    {
	path: 'teatros',
        children: [
            {
                path: 'list',
                component:TeatroListComponent
            },
            {
                path:':id',
                component:TeatroDetailComponent
            },
            {
                path:'add',
                component:TeatroCreateComponent
            }  ]
    },
    {
        path: 'usuarios',
        children: 
        [
            {
                path: 'list',
                component:UsuarioListComponent
            },
            {
                path: 'add',
                component: UsuarioCreateComponent
            },
            {
                path: ':id',
                component:UsuarioDetailComponent
            }
            
        ]
    },
     
    {
        path: 'reservas',
        children: [
            {
                path: 'list',
                component:ReservaListComponent
            },
            {
                path: 'add',
                component: ReservaCreateComponent
            },
            {
                path: ':id',
                component:ReservaDetailComponent
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
                path:':id',
                component:SillaDetailComponent
            }
        ]
    },
        {
        path: 'salas',
        children: [
            {
                path: 'list',
                component:SalaListComponent
            },
            {
                path:'add',
                component: SalaCreateComponent
            },
            {
                path: ':id',
                component:SalaDetailComponent
            }
        ]
    },
            {
        path: 'peliculas',
        children: [
            {
                path: 'list',
                component:PeliculaListComponent
            },
            {
                path: ':id',
                component:PeliculaDetailComponent
            }
        ]
    },
    {
    path:'festivales',
    children:[
            {
                path:'list',
                component:FestivalListComponent
            },
            {
                path:':id',
                component:FestivalDetailComponent
            },
            {
                path:'add',
                component:FestivalCreateComponent
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
