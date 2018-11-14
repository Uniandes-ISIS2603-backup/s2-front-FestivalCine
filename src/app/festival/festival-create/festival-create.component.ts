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
