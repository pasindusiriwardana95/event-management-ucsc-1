import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRouteComponentComponent } from './notification-route-component.component';

describe('NotificationRouteComponentComponent', () => {
  let component: NotificationRouteComponentComponent;
  let fixture: ComponentFixture<NotificationRouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationRouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
