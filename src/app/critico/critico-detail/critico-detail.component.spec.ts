import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticoDetailComponent } from './critico-detail.component';

describe('CriticoDetailComponent', () => {
  let component: CriticoDetailComponent;
  let fixture: ComponentFixture<CriticoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
