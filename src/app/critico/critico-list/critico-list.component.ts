import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Critico } from '../critico';
import { CriticoService } from '../critico.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap/';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import {Router} from '@angular/router/';
import {CriticoDetailComponent} from '../critico-detail/critico-detail.component';

@Component({
  selector: 'app-critico-list',
  templateUrl: './critico-list.component.html',
  styleUrls: ['./critico-list.component.css']
})

export class CriticoListComponent implements OnInit {

  constructor( private criticoService: CriticoService,
  private router: Router) { }
  
  criticos: Critico[];
  critico_id: number;
  selectedCritico: Critico
  model:any;
  critico: Critico;
  
  criticoDetail: CriticoDetailComponent
  
  onSelected(critico_id: number): void
  {
      this.critico_id = critico_id;
      this.selectedCritico = new Critico();
      this.getCriticoDetail();
  }
  
  getCriticos(): void
  {
      this.criticoService.getCriticos()
      .subscribe(criticos => this.criticos = criticos);
  }
  
  getCriticoDetail(): void
  {
      this.criticoService.getCriticoDetail(this.critico_id)
      .subscribe(selectedCritico => {this.selectedCritico = selectedCritico});
  }
  ngOnInit() {
      this.getCriticos();
  }
  
  @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();
  
  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map(term => (term === '' ? this.criticos
            : this.criticos.filter(critico => critico.nombres.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
}
formatter = (x: {nombre: string}) => x.nombre;
  
  busqueda(): void
  {
      if(this.model != undefined && this.model.id != undefined)
      {
          this.critico = this.model;
          this.model = undefined;
      }
      this.router.navigate(['/criticos/' + this.critico_id]);
      this.model = undefined;
      this.getCriticos();
      this.critico = undefined;
  }

}
