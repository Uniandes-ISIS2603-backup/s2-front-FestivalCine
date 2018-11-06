import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';


/**
 * The component for the list of reservas 
 */
@Component({
    selector: 'list-reserva',
    templateUrl: './reserva-list.component.html',
    styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

    /**
     * Constructor for the component
     */
    constructor(private reservaService: ReservaService,  private route: ActivatedRoute) { }
    
    /**
     * The list of reservas
     */
    @Input() reservas: Reserva[];
    
    allreservas:string = 'no';

    /**
     * Asks the service to update the list of editorials
     */
    getReservas(): void {
        this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() 
     {
        this.route.queryParams.filter(params => params.allreservas).subscribe(params => {
        console.log(params); 

        this.allreservas = params.allreservas;
        console.log(this.allreservas); 
      });
      if (this.allreservas == 'yes')
      {
         console.log("allreservas");
      
       this.getReservas();
       }
    }
}
