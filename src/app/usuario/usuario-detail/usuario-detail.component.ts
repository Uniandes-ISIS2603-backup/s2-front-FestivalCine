import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap  } from '@angular/router';

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
     private router: Router) { }

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

}
