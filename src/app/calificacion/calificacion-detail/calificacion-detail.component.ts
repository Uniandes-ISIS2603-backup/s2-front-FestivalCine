import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Usuario} from '../../usuario/usuario';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  constructor(
  private calificacionService: CalificacionService,
  private route: ActivatedRoute,
  private modalDialogService: ModalDialogService,
        private router: Router,
  private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
  
  calificacion: Calificacion;
  
  calificacion_id: number;
  
  usuario: Usuario;
  
  usuarios: Usuario[];
  
  getCalificacion(): void
  {
      this.calificacionService.getCalificacionDetail(this.calificacion_id)
          .subscribe(calificacion => {this.calificacion = calificacion});
      this.usuario = this.calificacion.usuario;
      this.usuarios = [this.calificacion.usuario];
  }

  ngOnInit() {
      this.calificacion_id = +this.route.snapshot.paramMap.get('id');
      this.calificacion = new Calificacion();
      this.getCalificacion();
  }
  
  deleteCalificacion(): void
  {
      this.modalDialogService.openDialog(this.viewRef, 
      {
          title:'Eliminar calificacion',
          childComponent: SimpleModalComponent,
          data: {text: '¿Está seguro que desea eliminar la calificación?'},
          actionButtons: [
              {
                  text: 'Si',
                  buttonClass: 'btn btn-danger',
                  onAction: () => {
                      this.calificacionService.deleteCalificacion(this.calificacion_id).subscribe(calificacion => {
                          this.toastrService.success("La calificacion se creó exitosamente", "Eliminar Calificacion");
                          this.router.navigate(['calificaciones/list']);
                      }, err => {
                          this.toastrService.error("El critico tiene asociadas algunas funciones", "Error");
                      });
                      return true;
                  }
              },
              {text: 'No', onAction: () => true}
          ]
      })
  }

}
