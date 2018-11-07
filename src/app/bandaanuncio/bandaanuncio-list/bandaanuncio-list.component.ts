import { Component, OnInit } from '@angular/core';
import { BandaAnuncio } from '../bandaanuncio';
import { BandaAnuncioService } from '../bandaanuncio.service';

@Component({
  selector: 'app-bandaanuncio-list',
  templateUrl: './bandaanuncio-list.component.html',
  styleUrls: ['./bandaanuncio-list.component.css']
})
/**
 * 
 */
export class BandaAnuncioListComponent implements OnInit {

  constructor(private bandaanuncioService: BandaAnuncioService) { }
  
 bandaanuncios: BandaAnuncio[];
  
  getBandaAnuncios(): void
  {
      this.bandaanuncioService.getBandaAnuncios().subscribe(bandaanuncios => this.bandaanuncios = bandaanuncios);
  }

  ngOnInit() {
      this.getBandaAnuncios();
  }

}
