import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

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
  
  getCalificacion(): void
  {
      this.calificacionService.getCalificacionDetail(this.calificacion_id)
          .subscribe(calificacion => {this.calificacion = calificacion});
  }

  ngOnInit() {
      this.calificacion_id = +this.route.snapshot.paramMap.get('id');
      this.calificacion = new Calificacion();
      this.getCalificacion();
  }

}
