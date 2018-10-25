import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from '../../app-routing';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';
import { PeliculaListComponent } from './pelicula-list.component';


import { Pelicula } from '../pelicula';
import {PeliculaService} from '../pelicula.service';

describe('PeliculaListComponent', () => {
  let component: PeliculaListComponent;
  let fixture: ComponentFixture<PeliculaListComponent>;
const peliculas: Pelicula[] = require('../../../assets/pelicula.json')
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ PeliculaListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, PeliculaService]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
