import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { UsuarioService } from '../usuario.service';
import { Usuario} from '../usuario';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  private route: ActivatedRoute,
  private modalDialogService: ModalDialogService,
        private router: Router,
  private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

@Input() usuarioDetail: UsuarioDetail;
 
usuario_id: number;

getUsuarioDetail(): void 
{
    this.usuarioService.getUsuarioDetail(this.usuario_id).subscribe(usuarioDetail => {this.usuarioDetail = usuarioDetail});
}


ngOnInit() 
{
    this.route.params.subscribe(params => {
    this.usuario_id = +this.route.snapshot.paramMap.get('id')});
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
}

deleteUsuario(): void
  {
      this.modalDialogService.openDialog(this.viewRef, 
      {
          title:'Eliminar usuario',
          childComponent: SimpleModalComponent,
          data: {text: '¿Está seguro que desea eliminar el usuario?'},
          actionButtons: [
              {
                  text: 'Si',
                  buttonClass: 'btn btn-danger',
                  onAction: () => {
                      this.usuarioService.deleteUsuario(this.usuario_id).subscribe(usuario => {
                          this.toastrService.success("El usuario se eliminó exitosamente", "Eliminar Usuario");
                          this.router.navigate(['usuarios/list']);
                      }, err => {
                          this.toastrService.error("Pasó algo", "Error");
                      });
                      return true;
                  }
              },
              {text: 'No', onAction: () => true}
          ]
      })
  }

}
