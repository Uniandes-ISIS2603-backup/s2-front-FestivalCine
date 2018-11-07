import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BandaAnuncioService } from '../bandaanuncio.service';
import { BandaAnuncio} from '../bandaanuncio';
import { BandaAnuncioDetail } from '../bandaanuncio-detail';

@Component({
  selector: 'app-bandaanuncio-detail',
  templateUrl: './bandaanuncio-detail.component.html',
  styleUrls: ['./bandaanuncio-detail.component.css']
})
export class BandaAnuncioDetailComponent implements OnInit {

  constructor(
    private bandaanuncioService: BandaAnuncioService,
    private route: ActivatedRoute) { }

@Input() bandaanuncioDetail: BandaAnuncioDetail;
 
bandaanuncio_id: number;

getBandaAnuncioDetail(): void 
{
    this.bandaanuncioService.getBandaAnuncioDetail(this.bandaanuncio_id).subscribe(bandaanuncioDetail => {this.bandaanuncioDetail = bandaanuncioDetail});
}

ngOnInit() 
{
    this.bandaanuncio_id = +this.route.snapshot.paramMap.get('id');
    this.bandaanuncioDetail = new BandaAnuncioDetail();
    this.getBandaAnuncioDetail();
}

}