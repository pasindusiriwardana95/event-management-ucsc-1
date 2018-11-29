import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotiRouteComponent } from './student-noti-route.component';

describe('StudentNotiRouteComponent', () => {
  let component: StudentNotiRouteComponent;
  let fixture: ComponentFixture<StudentNotiRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNotiRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotiRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
