import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditusersComponent } from './admin-editusers.component';

describe('AdminEditusersComponent', () => {
  let component: AdminEditusersComponent;
  let fixture: ComponentFixture<AdminEditusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
