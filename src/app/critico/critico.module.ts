import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CriticoListComponent } from './critico-list/critico-list.component';
import { CriticoService } from './critico.service';
//import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CriticoListComponent],
  providers: [CriticoService],
  exports:[CriticoListComponent]
})
export class CriticoModule { }
