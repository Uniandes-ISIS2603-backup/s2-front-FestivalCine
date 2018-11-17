import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Usuario} from '../../usuario/usuario';
import {Critico} from '../../critico/critico';
import {CriticoService} from '../../critico/critico.service';
import {Pelicula} from '../../pelicula/pelicula';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css'],
    providers: [CalificacionService]
})
export class CalificacionCreateComponent implements OnInit {

  constructor(
      private calificacionService: CalificacionService,
      private criticoService: CriticoService,
      private toastrService: ToastrService,
    private route: ActivatedRoute,
        private router: Router) { }
      
    calificacion: Calificacion;
    usuario: Usuario;
    criticos: Critico[];
    Pelicula: Pelicula;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
   getCriticos(): void {
        this.criticoService.getCriticos()
            .subscribe(criticos => {
                this.criticos =  criticos ;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    createCalificacion(): Calificacion
    {
             
        this.calificacionService.createCalificacion(this.calificacion)
            .subscribe((calificacion) => {
                this.calificacion.id = calificacion.id;
                this.router.navigate(['/calificaciones/' + calificacion.id]);
                this.create.emit();
                this.toastrService.success("La calificacion fue creada", "Creacion de calificacion");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        return this.calificacion;
    }
    
    cancelCreation(): void
    {
        this.toastrService.warning('La calificacion no fue creada', 'Calificacion creation');
        this.cancel.emit();
    }

  ngOnInit() 
      {
      console.log("Create calificacion");
      this.calificacion = new Calificacion();
      this.usuario = new Usuario();
      this.route.params.subscribe(params => 
      {
          this.usuario.id = +this.route.snapshot.parent.paramMap.get('id')
      });
      console.log(this.usuario.id);
      console.log(this.usuario)
      this.calificacion.usuario = this.usuario;
      this.calificacion.critico = new Critico();
      console.log(this.calificacion.usuario);
      this.getCriticos();
      
  }

}
