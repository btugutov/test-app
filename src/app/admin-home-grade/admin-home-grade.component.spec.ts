import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeGradeComponent } from './admin-home-grade.component';

describe('AdminHomeGradeComponent', () => {
  let component: AdminHomeGradeComponent;
  let fixture: ComponentFixture<AdminHomeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
