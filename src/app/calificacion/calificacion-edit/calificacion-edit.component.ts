import {Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import {Critico} from '../../critico/critico';
import {CriticoService} from '../../critico/critico.service';

@Component({
  selector: 'app-calificacion-edit',
  templateUrl: './calificacion-edit.component.html',
  styleUrls: ['./calificacion-edit.component.css']
})
export class CalificacionEditComponent implements OnInit {

  constructor(
        private criticoService: CriticoService,
        private calificacionService: CalificacionService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router) 
        { 
            this.navigationSubscription = this.router.events.subscribe((e: any) =>
                {
                    if (e instanceof NavigationEnd)
                    {
                        this.ngOnInit();
                    }
                }); 
        }
        
  navigationSubscription;
  
  calificacion_id: number;
  
  criticos: Critico[];
  
  @Input() calificacion: Calificacion;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();

  getCriticos(): void {
        this.criticoService.getCriticos()
            .subscribe(criticos => {
                this.criticos =  criticos ;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
  
  editCalificacion(): void
  {
      this.calificacionService.updateCalificacion(this.calificacion)
          .subscribe((calificacion)=> 
          {
              this.calificacion.id = calificacion.id;
                this.router.navigate(['/calificaciones/' + calificacion.id]);
              this.toastrService.success("La información de la calificacion fue actualizada", "Calificacion edition")
      });
      this.update.emit();
  }
  
  
   ngOnChanges() {
        this.ngOnInit();
    }
  
  cancelEdition(): void {
        this.cancel.emit();
    }
    
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

  ngOnInit() {
    this.getCriticos();
    this.calificacion_id = +this.route.snapshot.paramMap.get('id');
    this.calificacion = new Calificacion();
      this.calificacion.critico = new Critico();
    this.getCalificacion();
      this.getCriticos();
  }
  
  getCalificacion():void
{
    this.calificacionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(calificacion => 
        {
            this.calificacion = calificacion;
    });
}
  
}
