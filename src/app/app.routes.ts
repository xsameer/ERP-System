
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
      { path: 'register', component: RegisterComponent }, 
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
