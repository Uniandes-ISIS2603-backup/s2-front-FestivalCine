import { Component, OnInit, Input } from '@angular/core';
import {Calificacion} from '../calificacion';
import {CalificacionService} from '../calificacion.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  constructor( private calificacionService: CalificacionService,  
  private route: ActivatedRoute) { }

  @Input() calificaciones: Calificacion[];
  
  
  allcalificaciones:string = 'no';
  
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

  ngOnInit() 
      {
       this.route.queryParams.filter(params => params.allcalificaciones).subscribe(params => {
        console.log(params); 

        this.allcalificaciones = params.allcalificaciones;
        console.log(this.allcalificaciones); 
      });
      if (this.allcalificaciones == 'yes')
      {
         console.log("allcalificaciones");
      
       this.getCalificaciones();
       }
  }

}
