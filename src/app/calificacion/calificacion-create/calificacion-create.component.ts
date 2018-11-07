import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css'],
    providers: [CalificacionService]
})
export class CalificacionCreateComponent implements OnInit {

  constructor(
      private calificacionService: CalificacionService,
      private toastrService: ToastrService) { }
      
    calificacion: Calificacion;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createCalificacion(): Calificacion
    {
        this.calificacionService.createCalificacion(this.calificacion)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("La calificacion fue creada", "Creacion de calificacion");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        return this.calificacion;
    }
    
    cancelCreation(): void
    {
        this.cancel.emit();
    }

  ngOnInit() 
      {
      this.calificacion = new Calificacion();
  }

}
