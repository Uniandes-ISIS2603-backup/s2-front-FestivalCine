import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';

import { TeatroListComponent } from './teatro-list.component';
import { Teatro } from '../teatro';
import { TeatroService } from '../teatro.service';

describe('TeatroListComponent', () => {
  let component: TeatroListComponent;
  let fixture: ComponentFixture<TeatroListComponent>;
    const teatros: Teatro[] = require('../../../assets/teatro.json') 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ TeatroListComponent ],
        providers: [{provide: APP_BASE_HREF, useValue: ''}, TeatroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
