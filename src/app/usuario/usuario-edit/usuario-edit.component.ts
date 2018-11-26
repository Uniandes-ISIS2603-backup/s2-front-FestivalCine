import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import { UsuarioService} from '../usuario.service';
import {UsuarioDetail} from '../usuario-detail';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor(
  private usuarioService: UsuarioService,
  private toastrService: ToastrService,
  private route: ActivatedRoute,
  private router: Router) 
  { 
      this.navigationSubscription = this.router.events.subscribe((e: any) => 
      {
          if(e instanceof NavigationEnd)
          {
              this.ngOnInit();
          }
      });
  }

  navigationSubscription;
  
  usuario_id: number;
  
  @Input() usuario: UsuarioDetail;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
  ngOnInit() 
  {
      this.usuario_id = +this.route.snapshot.paramMap.get('id');
      this.usuario = new UsuarioDetail();
      this.getUsuario();
  }
  
  ngOnChanges() {
        this.ngOnInit();
    }
    
    cancelEdition(): void {
        this.cancel.emit();
    }
  
  ngOnDestroy()
  {
      if (this.navigationSubscription)
      {
          this.navigationSubscription.unsubscribe();
      }
  }
  
  getUsuario(): void
  {
      this.usuarioService.getUsuarioDetail(this.usuario_id)
          .subscribe(usuario => 
          {
              this.usuario = usuario;
      });
  }
  
  editUsuario():void
  {
      this.usuarioService.updateUsuario(this.usuario)
          .subscribe((usuario) => 
          {
              this.usuario.id = usuario.id;
              this.router.navigate(['/usuarios/' + usuario.id]);
              this.toastrService.success("La información del usuario fue actualizada", "usuario edition")
      });
      this.update.emit();
  }

}
