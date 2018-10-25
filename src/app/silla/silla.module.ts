import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillaListComponent } from './silla-list/silla-list.component';
import { SillaDetailComponent } from './silla-detail/silla-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
 
  declarations: [SillaListComponent, SillaDetailComponent],
   exports:[SillaListComponent,SillaDetailComponent]
})
export class SillaModule { }
