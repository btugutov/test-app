import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditquizComponent } from './admin-editquiz.component';

describe('AdminEditquizComponent', () => {
  let component: AdminEditquizComponent;
  let fixture: ComponentFixture<AdminEditquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
