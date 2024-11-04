import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeesManagementComponent } from './admin-fees-management.component';

describe('AdminFeesManagementComponent', () => {
  let component: AdminFeesManagementComponent;
  let fixture: ComponentFixture<AdminFeesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFeesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
