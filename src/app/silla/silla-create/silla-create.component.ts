import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { SillaService } from '../silla.service';

import { Silla } from '../silla';

@Component({
  selector: 'app-silla-create',
  templateUrl: './silla-create.component.html',
  styleUrls: ['./silla-create.component.css'],
  providers: [SillaService]
})
export class SillaCreateComponent implements OnInit {

  constructor(
  private sillaService: SillaService,
  private toastrService: ToastrService) { }
  
  silla: Silla;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();

  createSilla():Silla
   {
        this.sillaService.createSilla(this.silla)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("silla creada", "cracion silla");
            }, err => {
                this.toastrService.error(err, "Error");
            });
      return this.silla;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
   
  ngOnInit() {
      this.silla = new Silla();
  }

}
