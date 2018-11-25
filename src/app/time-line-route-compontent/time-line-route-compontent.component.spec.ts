import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineRouteCompontentComponent } from './time-line-route-compontent.component';

describe('TimeLineRouteCompontentComponent', () => {
  let component: TimeLineRouteCompontentComponent;
  let fixture: ComponentFixture<TimeLineRouteCompontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineRouteCompontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineRouteCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
