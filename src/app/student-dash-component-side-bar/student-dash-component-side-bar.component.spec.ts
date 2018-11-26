import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashComponentSideBarComponent } from './student-dash-component-side-bar.component';

describe('StudentDashComponentSideBarComponent', () => {
  let component: StudentDashComponentSideBarComponent;
  let fixture: ComponentFixture<StudentDashComponentSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashComponentSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashComponentSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
