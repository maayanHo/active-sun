import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HysolateComponent } from './hysolate.component';

describe('HysolateComponent', () => {
  let component: HysolateComponent;
  let fixture: ComponentFixture<HysolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HysolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HysolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
