import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEventComponentComponent } from './student-event-component.component';

describe('StudentEventComponentComponent', () => {
  let component: StudentEventComponentComponent;
  let fixture: ComponentFixture<StudentEventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
