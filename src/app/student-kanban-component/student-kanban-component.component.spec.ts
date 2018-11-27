import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentKanbanComponentComponent } from './student-kanban-component.component';

describe('StudentKanbanComponentComponent', () => {
  let component: StudentKanbanComponentComponent;
  let fixture: ComponentFixture<StudentKanbanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentKanbanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentKanbanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
