import { Component, OnInit } from '@angular/core';
import {Calificacion} from '../calificacion';
import {CalificacionService} from '../calificacion.service';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  constructor( private calificacionService: CalificacionService) { }

  calificaciones: Calificacion[];
  calificacion_id: number;
  selectedCalificacion: Calificacion
  
  onSelected(calificacion_id: number): void
  {
      this.calificacion_id = calificacion_id;
      this.selectedCalificacion = new Calificacion();
      this.getCalificacionDetail();
  }
  
  getCalificaciones(): void
  {
      this.calificacionService.getCalificaciones()
      .subscribe(calificaciones => this.calificaciones = calificaciones);
  }
  
  getCalificacionDetail(): void
  {
      this.calificacionService.getCalificacionDetail(this.calificacion_id)
          .subscribe(selectedCalificacion => {this.selectedCalificacion = selectedCalificacion});
  }

  ngOnInit() {
      this.getCalificaciones();
  }

}
