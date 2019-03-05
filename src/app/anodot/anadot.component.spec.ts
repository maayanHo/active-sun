import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadotComponent } from './anadot.component';

describe('AnadotComponent', () => {
  let component: AnadotComponent;
  let fixture: ComponentFixture<AnadotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
