import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradebookComponent } from './teacher-gradebook.component';

describe('TeacherGradebookComponent', () => {
  let component: TeacherGradebookComponent;
  let fixture: ComponentFixture<TeacherGradebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherGradebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherGradebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
