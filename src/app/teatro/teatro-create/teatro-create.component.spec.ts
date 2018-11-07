import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroCreateComponent } from './teatro-create.component';

describe('TeatroCreateComponent', () => {
  let component: TeatroCreateComponent;
  let fixture: ComponentFixture<TeatroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
