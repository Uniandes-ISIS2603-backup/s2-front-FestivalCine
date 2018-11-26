import { Component, OnInit, Input } from '@angular/core';
import { Teatro } from '../teatro';
import { TeatroService } from '../teatro.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teatro-list',
  templateUrl: './teatro-list.component.html',
  styleUrls: ['./teatro-list.component.css']
})
/**
 * 
 */
export class TeatroListComponent implements OnInit {

  constructor(private teatroService: TeatroService, private route: ActivatedRoute) { }
  
  @Input() teatros: Teatro[];
  
  todosTeatros: string = 'no';
  
  getTeatros(): void
  {
      this.teatroService.getTeatros().subscribe(teatros => this.teatros = teatros);
  }

  ngOnInit() {
      this.route.queryParams
          .filter(params => params.todosTeatros)
          .subscribe(params => {console.log(params);
          
        this.todosTeatros = params.todosTeatros;
        console.log(this.todosTeatros);
          });
      if (this.todosTeatros == 'no')
      {
          console.log("todosTeatros")
          this.getTeatros();
  }
      }
      
      
      

}
