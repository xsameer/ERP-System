import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseMaterialsComponent } from './teacher-course-materials.component';

describe('TeacherCourseMaterialsComponent', () => {
  let component: TeacherCourseMaterialsComponent;
  let fixture: ComponentFixture<TeacherCourseMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCourseMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCourseMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
