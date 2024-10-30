
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; 
import { RegisterComponent } from './auth/register/register.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { AttendanceComponent } from './attendance/attendance.component';
import { CourseManagementComponent } from './course-management/course-management.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'course-management', component: CourseManagementComponent }, 
  { path: 'attendance', component: AttendanceComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'register', component: RegisterComponent }, 
      { path: 'course-management', component: CourseManagementComponent }, 
      { path: 'attendance', component: AttendanceComponent },
      // { path: 'payment', component: PaymentComponent },
      // { path: 'timetable', component: TimetableComponent },
      // { path: 'faculty', component: FacultyComponent },
      // { path: 'marks', component: MarksComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
