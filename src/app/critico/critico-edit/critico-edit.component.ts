import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {CriticoService} from '../critico.service';
import {Critico} from '../critico';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-critico-edit',
  templateUrl: './critico-edit.component.html',
  styleUrls: ['./critico-edit.component.css'],
  providers: [DatePipe]
})
export class CriticoEditComponent implements OnInit {

  constructor(
  private criticoService: CriticoService,
  private toastrService: ToastrService) { }
  
  @Input() critico_id: number;
  
  @Input() critico: Critico;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
  editCritico(): void
  {
      this.criticoService.updateCritico(this.critico)
          .subscribe(()=> 
          {
              this.toastrService.success("La información del critico fue actualizada", "Critico edition")
      });
      this.update.emit();
  }
  
   ngOnChanges() {
        this.ngOnInit();
    }
  
  cancelEdition(): void {
        this.cancel.emit();
    }

getCritico():void
{
    this.criticoService.getCriticoDetail(this.critico_id)
        .subscribe(critico => 
        {
            this.critico = critico;
    });
}

  ngOnInit() {
      this.critico = new Critico();
      this.getCritico();
  }

}
