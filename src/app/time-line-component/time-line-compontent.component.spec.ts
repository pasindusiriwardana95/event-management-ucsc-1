import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineCompontentComponent } from './time-line-compontent.component';

describe('TimeLineCompontentComponent', () => {
  let component: TimeLineCompontentComponent;
  let fixture: ComponentFixture<TimeLineCompontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineCompontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
