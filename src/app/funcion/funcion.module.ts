import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionListComponent } from './funcion-list/funcion-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FuncionListComponent],
  exports:[FuncionListComponent]
})
export class FuncionModule { }
