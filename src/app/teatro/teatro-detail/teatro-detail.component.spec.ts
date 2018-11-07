import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroDetailComponent } from './teatro-detail.component';

describe('TeatroDetailComponent', () => {
  let component: TeatroDetailComponent;
  let fixture: ComponentFixture<TeatroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
