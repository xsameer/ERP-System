
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
import { UserManagementComponent } from './user-management/user-management.component';
import { FeesManagementComponent } from './fees-management/fees-management.component';
import { ExamManagementComponent } from './exam-management/exam-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './shared/navbar.component';
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'home-page', component: HomePageComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'services', component: AuthService},
  { path: 'course-management', component: CourseManagementComponent }, 
  { path: 'attendance', component: AttendanceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'time-table', component: TimeTableComponent},
  { path: 'feedback-management', component: FeedbackManagementComponent},
  { path: 'college-info', component: CollegeInfoComponent},
  { path: 'subject-registration', component: SubjectRegistrationComponent},
  { path: 'user-management', component: UserManagementComponent},
  { path: 'fees-management', component: FeesManagementComponent},
  { path: 'exam-management', component: ExamManagementComponent},
  {
    path: 'dashboard',
    component: DashboardLayoutComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent},
      { path: 'register', component: RegisterComponent }, 
      { path: 'navbar', component: NavbarComponent},
      { path: 'course-management', component: CourseManagementComponent }, 
      { path: 'attendance', component: AttendanceComponent },
      { path: 'time-table', component: TimeTableComponent },
      { path: 'feedback-management', component: FeedbackManagementComponent },
      { path: 'college-info', component: CollegeInfoComponent },
      { path: 'subject-registration', component: SubjectRegistrationComponent },
      { path: 'user-management', component: UserManagementComponent},
      { path: 'fees-management', component: FeesManagementComponent},
      { path: 'exam-management', component: ExamManagementComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
