import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReservaService } from '../reserva.service';
import { Reserva} from '../reserva';
import { ReservaDetail } from '../reserva-detail';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  constructor(private reservaService: ReservaService,
    private route: ActivatedRoute) { }
    
  reservaDetail: ReservaDetail;
 
  reserva_id: number;

getReservaDetail(): void 
{
    this.reservaService.getReservaDetail(this.reserva_id).subscribe(reservaDetail => {this.reservaDetail = reservaDetail});
}
  ngOnInit() 
  {
    this.reserva_id = +this.route.snapshot.paramMap.get('id');
    this.reservaDetail = new ReservaDetail();
    this.getReservaDetail();
  }

}
