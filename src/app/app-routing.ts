import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {CriticoListComponent} from '../app/critico/critico-list/critico-list.component';
import {FuncionListComponent} from '../app/funcion/funcion-list/funcion-list.component';
import {TeatroListComponent} from '../app/teatro/teatro-list/teatro-list.component';
import {UsuarioListComponent} from '../app/usuario/usuario-list/usuario-list.component';

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