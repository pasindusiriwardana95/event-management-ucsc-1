import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponentLecComponent } from './reg-component-lec.component';

describe('RegComponentLecComponent', () => {
  let component: RegComponentLecComponent;
  let fixture: ComponentFixture<RegComponentLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegComponentLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponentLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
