import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeatroListComponent } from './teatro-list/teatro-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeatroListComponent],
  exports:[TeatroListComponent]
})
export class TeatroModule { }
