import {Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


import {DatePipe} from '@angular/common';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-calificacion-edit',
  templateUrl: './calificacion-edit.component.html',
  styleUrls: ['./calificacion-edit.component.css'],
  providers: [DatePipe]
})
export class CalificacionEditComponent implements OnInit, OnDestroy {

  constructor(
  
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
  
  @Input() calificacion: Calificacion;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
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

  ngOnInit() 
  {
    this.calificacion_id = +this.route.snapshot.paramMap.get('id');
    this.calificacion = new Calificacion();
    this.getCalificacion();
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
