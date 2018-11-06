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
  
  getCalificaciones(): void
  {
      this.calificacionService.getCalificaciones().subscribe(calificaciones => this.calificaciones);
  }

  ngOnInit() {
      this.getCalificaciones();
  }

}
