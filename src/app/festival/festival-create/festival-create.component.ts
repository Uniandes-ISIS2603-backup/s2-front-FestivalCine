import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FestivalService } from '../festival.service';
import { Festival} from '../festival';
@Component({
  selector: 'app-festival-create',
  templateUrl: './festival-create.component.html',
  styleUrls: ['./festival-create.component.css'],
  providers : [DatePipe]
})
export class FestivalCreateComponent implements OnInit {

    constructor(private dp: DatePipe, private festivalService: FestivalService, private toastrService: ToastrService) { }
    
    festival: Festival;
    
    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    createFestival(): Festival
    {
//        let fechaIni: Date = new Date(this.festival.fechaInicio.day, this.festival.fechaInicio.month, this.festival.fechaInicio.year);
//        this.festival.fechaInicio = this.dp.transform(fechaIni, 'dd-MM-yyyy');
//        
//        let fechaFinal: Date = new Date(this.festival.fechaFin.day, this.festival.fechaFin.month, this.festival.fechaFin.year);
//        this.festival.fechaInicio = this.dp.transform(fechaFinal, 'dd-MM-yyyy');
               this.festivalService.createFestival(this.festival)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El festival fue creado", "Creacion de festival");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.festival; 
    }
    
       cancelCreation(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.festival = new Festival();
  }

}
