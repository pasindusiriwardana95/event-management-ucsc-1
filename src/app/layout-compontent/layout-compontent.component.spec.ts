import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompontentComponent } from './layout-compontent.component';

describe('LayoutCompontentComponent', () => {
  let component: LayoutCompontentComponent;
  let fixture: ComponentFixture<LayoutCompontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCompontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
