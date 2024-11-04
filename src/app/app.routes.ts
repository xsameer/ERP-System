
import { NgModule } from '@angular/core';
import { inject } from '@angular/core';//
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';//
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { CollegeInfoComponent } from './college-info/college-info.component';
import { SubjectRegistrationComponent } from './subject-registration/subject-registration.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { FeesManagementComponent } from './fees-management/fees-management.component';
import { ExamManagementComponent } from './exam-management/exam-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './shared/navbar.component';
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCourseManagementComponent } from './admin/admin-course-management/admin-course-management.component';
import { AdminComponent } from './admin/admin.component';
import { AdminExamManagementComponent } from './admin/admin-exam-management/admin-exam-management.component';
import { AdminFeesManagementComponent } from './admin/admin-fees-management/admin-fees-management.component';
import { AdminNotificationManagementComponent } from './admin/admin-notification-management/admin-notification-management.component';
import { AdminReportManagementComponent } from './admin/admin-report-management/admin-report-management.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';

import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAttendanceComponent } from './teacher/teacher-attendance/teacher-attendance.component';
import { TeacherCourseMaterialsComponent } from './teacher/teacher-course-materials/teacher-course-materials.component';
import { TeacherFeedbackComponent } from './teacher/teacher-feedback/teacher-feedback.component';
import { TeacherGradebookComponent } from './teacher/teacher-gradebook/teacher-gradebook.component';
import { TeacherTimetableComponent } from './teacher/teacher-timetable/teacher-timetable.component';


// import { adminRoutes } from './admin/admin-routes';
// import { teacherRoutes } from './teacher/teacher-routes';


export const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'services', component: AuthService },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'feedback-management', component: FeedbackManagementComponent },
  { path: 'college-info', component: CollegeInfoComponent },
  { path: 'subject-registration', component: SubjectRegistrationComponent },
  { path: 'profile-management', component: ProfileManagementComponent },
  { path: 'fees-management', component: FeesManagementComponent },
  { path: 'exam-management', component: ExamManagementComponent },

  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  { path: 'teacher-attendance', component: TeacherAttendanceComponent },
  { path: 'teacher-course-material', component: TeacherCourseMaterialsComponent },
  { path: 'teacher-feedback', component: TeacherFeedbackComponent },
  { path: 'teacher-gradebook', component: TeacherGradebookComponent },
  { path: 'teacher-timetable', component: TeacherTimetableComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-course-management', component: AdminCourseManagementComponent },
  { path: 'admin-exam-management', component: AdminExamManagementComponent },
  { path: 'admin-fees-management', component: AdminFeesManagementComponent },
  { path: 'admin-notification-management', component: AdminNotificationManagementComponent },
  { path: 'admin-report-management', component: AdminReportManagementComponent },
  { path: 'admin-user-management', component: AdminUserManagementComponent },

  // ...adminRoutes,
  // ...teacherRoutes,

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'course-management', component: CourseManagementComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'time-table', component: TimeTableComponent },
      { path: 'feedback-management', component: FeedbackManagementComponent },
      { path: 'college-info', component: CollegeInfoComponent },
      { path: 'subject-registration', component: SubjectRegistrationComponent },
      { path: 'profile-management', component: ProfileManagementComponent },
      { path: 'fees-management', component: FeesManagementComponent },
      { path: 'exam-management', component: ExamManagementComponent },
    ]
  },

  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      { path: '', component: TeacherDashboardComponent },
      { path: 'teacher-attendance', component: TeacherAttendanceComponent },
      { path: 'teacher-course-material', component: TeacherCourseMaterialsComponent },
      { path: 'teacher-feedback', component: TeacherFeedbackComponent },
      { path: 'teacher-gradebook', component: TeacherGradebookComponent },
      { path: 'teacher-timetable', component: TeacherTimetableComponent },
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'admin-course-management', component: AdminCourseManagementComponent },
      { path: 'admin-exam-management', component: AdminExamManagementComponent },
      { path: 'admin-fees-management', component: AdminFeesManagementComponent },
      { path: 'admin-notification-management', component: AdminNotificationManagementComponent },
      { path: 'admin-report-management', component: AdminReportManagementComponent },
      { path: 'admin-user-management', component: AdminUserManagementComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
