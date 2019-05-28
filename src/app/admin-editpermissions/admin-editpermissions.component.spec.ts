import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpermissionsComponent } from './admin-editpermissions.component';

describe('AdminEditpermissionsComponent', () => {
  let component: AdminEditpermissionsComponent;
  let fixture: ComponentFixture<AdminEditpermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditpermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditpermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
