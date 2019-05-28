import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeEditComponent } from './admin-home-edit.component';

describe('AdminHomeEditComponent', () => {
  let component: AdminHomeEditComponent;
  let fixture: ComponentFixture<AdminHomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
