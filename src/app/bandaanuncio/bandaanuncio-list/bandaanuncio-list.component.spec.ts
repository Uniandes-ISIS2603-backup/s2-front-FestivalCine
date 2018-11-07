import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';

import { BandaAnuncioListComponent } from './bandaanuncio-list.component';
import { BandaAnuncio } from '../bandaanuncio';
import { BandaAnuncioService } from '../bandaanuncio.service';

describe('BandaAnuncioListComponent', () => {
  let component: BandaAnuncioListComponent;
  let fixture: ComponentFixture<BandaAnuncioListComponent>;
    const bandaanuncios: BandaAnuncio[] = require('../../../assets/bandaanuncios.json') 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ BandaAnuncioListComponent ],
        providers: [{provide: APP_BASE_HREF, useValue: ''}, BandaAnuncioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaAnuncioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
