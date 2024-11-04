import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamManagementComponent } from './admin-exam-management.component';

describe('AdminExamManagementComponent', () => {
  let component: AdminExamManagementComponent;
  let fixture: ComponentFixture<AdminExamManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminExamManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
