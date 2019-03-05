import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfotechComponent } from './transfotech.component';

describe('TransfotechComponent', () => {
  let component: TransfotechComponent;
  let fixture: ComponentFixture<TransfotechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfotechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
