import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionEditComponent } from './funcion-edit.component';

describe('FuncionEditComponent', () => {
  let component: FuncionEditComponent;
  let fixture: ComponentFixture<FuncionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
