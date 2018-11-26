import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashComponentComponent } from './student-dash-component.component';

describe('StudentDashComponentComponent', () => {
  let component: StudentDashComponentComponent;
  let fixture: ComponentFixture<StudentDashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
