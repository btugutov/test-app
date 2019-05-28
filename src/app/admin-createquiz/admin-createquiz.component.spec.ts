import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatequizComponent } from './admin-createquiz.component';

describe('AdminCreatequizComponent', () => {
  let component: AdminCreatequizComponent;
  let fixture: ComponentFixture<AdminCreatequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
