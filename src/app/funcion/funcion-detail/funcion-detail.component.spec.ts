import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionDetailComponent } from './funcion-detail.component';

describe('FuncionDetailComponent', () => {
  let component: FuncionDetailComponent;
  let fixture: ComponentFixture<FuncionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
