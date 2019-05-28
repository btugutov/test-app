import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditengagementsComponent } from './admin-editengagements.component';

describe('AdminEditengagementsComponent', () => {
  let component: AdminEditengagementsComponent;
  let fixture: ComponentFixture<AdminEditengagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditengagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditengagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
