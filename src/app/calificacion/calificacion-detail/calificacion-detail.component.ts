import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Usuario} from '../../usuario/usuario';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  constructor(
  private calificacionService: CalificacionService,
  private route: ActivatedRoute) { }
  
  calificacion: Calificacion;
  
  calificacion_id: number;
  
  usuario: Usuario;
  
  getCalificacion(): void
  {
      this.calificacionService.getCalificacionDetail(this.calificacion_id)
          .subscribe(calificacion => {this.calificacion = calificacion});
      this.usuario = this.calificacion.usuario;
  }

  ngOnInit() {
      this.calificacion_id = +this.route.snapshot.paramMap.get('id');
      this.calificacion = new Calificacion();
      this.getCalificacion();
  }

}
