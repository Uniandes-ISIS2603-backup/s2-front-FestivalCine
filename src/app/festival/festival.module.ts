import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalListComponent } from './festival-list/festival-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FestivalListComponent],
  exports:[FestivalListComponent]
})
export class FestivalModule { }
