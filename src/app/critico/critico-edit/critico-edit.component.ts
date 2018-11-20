import {Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

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
export class CriticoEditComponent implements OnInit, OnDestroy {

  constructor(
  private criticoService: CriticoService,
  private toastrService: ToastrService,
  private route: ActivatedRoute,
  private router: Router) {
      this.navigationSubscription = this.router.events.subscribe((e: any) =>
      {
          if (e instanceof NavigationEnd)
          {
              this.ngOnInit();
          }
      }); }
  
  navigationSubscription;
  
  critico_id: number;
  
  @Input() critico: Critico;
  
  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
  editCritico(): void
  {
      this.criticoService.updateCritico(this.critico)
          .subscribe((critico)=> 
          {
              this.critico.id = critico.id;
                this.router.navigate(['/criticos/' + critico.id]);
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
      this.critico_id = +this.route.snapshot.paramMap.get('id');
      this.critico = new Critico();
      this.getCritico();
  }
  
  ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
