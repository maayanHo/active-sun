import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetafimComponent } from './netafim.component';

describe('NetafimComponent', () => {
  let component: NetafimComponent;
  let fixture: ComponentFixture<NetafimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetafimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetafimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
