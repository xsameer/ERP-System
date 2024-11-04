import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationManagementComponent } from './admin-notification-management.component';

describe('AdminNotificationManagementComponent', () => {
  let component: AdminNotificationManagementComponent;
  let fixture: ComponentFixture<AdminNotificationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNotificationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
