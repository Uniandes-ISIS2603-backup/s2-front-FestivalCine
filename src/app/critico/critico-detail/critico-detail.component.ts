import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {CriticoService} from '../critico.service';
import {Critico} from '../critico';

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';


@Component({
  selector: 'app-critico-detail',
  templateUrl: './critico-detail.component.html',
  styleUrls: ['./critico-detail.component.css']
})
export class CriticoDetailComponent implements OnInit {

  constructor(
  private criticoService: CriticoService,
  private route: ActivatedRoute,
  private modalDialogService: ModalDialogService,
        private router: Router,
  private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {   }
  
  critico:Critico;
  
  starRating:number;
  
  critico_id : number;
  
  getCritico(): void {
      this.criticoService.getCriticoDetail(this.critico_id)
      .subscribe(critico => {this.critico = critico});
      
      
  }

  ngOnInit() {
      this.critico_id = +this.route.snapshot.paramMap.get('id');
      this.critico = new Critico();
      this.getCritico();
      console.log(this.critico.calificaciones);
  }
  
  deleteCritico(): void
  {
      this.modalDialogService.openDialog(this.viewRef, 
      {
          title:'Eliminar critico',
          childComponent: SimpleModalComponent,
          data: {text: '¿Está seguro que desea eliminar el critico?'},
          actionButtons: [
              {
                  text: 'Si',
                  buttonClass: 'btn btn-danger',
                  onAction: () => {
                      this.criticoService.deleteCritico(this.critico_id).subscribe(critico => {
                          this.toastrService.success("El critico se eliminó exitosamente", "Eliminar Critico");
                          this.router.navigate(['criticos/list']);
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
