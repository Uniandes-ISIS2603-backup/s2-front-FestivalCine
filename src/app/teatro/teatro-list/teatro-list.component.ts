import { Component, OnInit } from '@angular/core';
import { Teatro } from '../teatro';
import { TeatroService } from '../teatro.service';

@Component({
  selector: 'app-teatro-list',
  templateUrl: './teatro-list.component.html',
  styleUrls: ['./teatro-list.component.css']
})
/**
 * 
 */
export class TeatroListComponent implements OnInit {

  constructor(private teatroService: TeatroService) { }
  
  teatros: Teatro[];
  
  getTeatros(): void
  {
      this.teatroService.getTeatros().subscribe(teatros => this.teatros = teatros);
  }

  ngOnInit() {
      this.getTeatros();
  }

}
