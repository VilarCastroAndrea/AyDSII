import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurnoComponent } from './list-turno.component';

describe('ListTurnoComponent', () => {
  let component: ListTurnoComponent;
  let fixture: ComponentFixture<ListTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
