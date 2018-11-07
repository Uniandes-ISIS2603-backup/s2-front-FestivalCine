import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import {CriticoService} from '../critico.service';

import {Critico} from '../critico';

@Component({
  selector: 'app-critico-create',
  templateUrl: './critico-create.component.html',
  styleUrls: ['./critico-create.component.css'],
  providers: [CriticoService]
})
export class CriticoCreateComponent implements OnInit {

  constructor(
  private criticoService: CriticoService,
  private toastrService: ToastrService) { }
  
  critico: Critico;
  
  @Output() cancel= new EventEmitter();

  @Output() create = new EventEmitter();
  
  createCritico(): Critico
  {
      this.criticoService.createCritico(this.critico)
          .subscribe(() => {
              this.create.emit();
              this.toastrService.success("El critico fue creado", "Creación de usuario");
      }, err => {
          this.toastrService.error(err, "Error");
      });
      
      return this.critico;
  }
  
  cancelCreation(): void
  {
      this.cancel.emit();
  }
  
  ngOnInit() 
  {
      this.critico = new Critico();
  }

}
