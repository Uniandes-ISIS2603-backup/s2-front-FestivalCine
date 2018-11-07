import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeatroService } from '../teatro.service';
import { Teatro } from '../teatro';

@Component({
  selector: 'app-teatro-create',
  templateUrl: './teatro-create.component.html',
  styleUrls: ['./teatro-create.component.css']
})
export class TeatroCreateComponent implements OnInit {

  constructor( private teatroService: TeatroService, private toastrService: ToastrService) { }
    
  teatro: Teatro;
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
   createTeatro(): Teatro
    {
               this.teatroService.createTeatro(this.teatro)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El teatro fue creado", "Creacion de teatro");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.teatro; 
    }

       cancelCreation(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.teatro = new Teatro();
  }

}
