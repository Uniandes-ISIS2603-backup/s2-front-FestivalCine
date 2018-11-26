import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroEditComponent } from './teatro-edit.component';

describe('TeatroEditComponent', () => {
  let component: TeatroEditComponent;
  let fixture: ComponentFixture<TeatroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
