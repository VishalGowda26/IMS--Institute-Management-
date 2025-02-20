import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { DashboardDisplayComponent } from './components/dashboard-display/dashboard-display.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfirmationGuard } from './guards/confirmation.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardDisplayComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'create-student', canDeactivate:[ConfirmationGuard], component: CreateStudentComponent },
      { path: 'all-students', component: AllStudentsComponent },
      { path: 'student-details/:id', component: StudentDetailsComponent },
      { path: 'edit-student/:id', canDeactivate:[ConfirmationGuard], component: CreateStudentComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
