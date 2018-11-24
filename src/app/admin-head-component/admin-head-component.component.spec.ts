import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadComponentComponent } from './admin-head-component.component';

describe('AdminHeadComponentComponent', () => {
  let component: AdminHeadComponentComponent;
  let fixture: ComponentFixture<AdminHeadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHeadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
