import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditgradeComponent } from './admin-editgrade.component';

describe('AdminEditgradeComponent', () => {
  let component: AdminEditgradeComponent;
  let fixture: ComponentFixture<AdminEditgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
