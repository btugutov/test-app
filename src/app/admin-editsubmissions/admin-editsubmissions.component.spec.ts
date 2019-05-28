import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditsubmissionsComponent } from './admin-editsubmissions.component';

describe('AdminEditsubmissionsComponent', () => {
  let component: AdminEditsubmissionsComponent;
  let fixture: ComponentFixture<AdminEditsubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditsubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
