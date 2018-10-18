import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {CriticoListComponent} from '../app/critico/critico-list/critico-list.component';

const routes: Routes = [
    {
        path: 'criticos',
        children: [
            {
                path: 'list',
                component:CriticoListComponent
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