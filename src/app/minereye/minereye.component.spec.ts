import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinereyeComponent } from './minereye.component';

describe('MinereyeComponent', () => {
  let component: MinereyeComponent;
  let fixture: ComponentFixture<MinereyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinereyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinereyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
