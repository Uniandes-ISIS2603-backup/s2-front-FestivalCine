import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';

import { CriticoListComponent } from './critico-list.component';
import { Critico } from '../critico';
import {CriticoService} from '../critico.service';

describe('CriticoListComponent', () => {
  let component: CriticoListComponent;
  let fixture: ComponentFixture<CriticoListComponent>;
    const criticos: Critico[] = require('../../../assets/critico.json')

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ CriticoListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, CriticoService]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
