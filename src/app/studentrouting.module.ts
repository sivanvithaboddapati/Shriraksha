import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddStudentCanDeactivateGuard } from './addstudent_candeactivate_guard.service';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { ResolveguardService } from './resolveguard.service';

const routes: Routes = [
  {path:'students',
  children:[
    {path:'',component:DetailsComponent,
  resolve:{studentlist:ResolveguardService },
  canActivate:[AuthGuard]},
  {path:'add', component:AddstudentComponent, canDeactivate:[AddStudentCanDeactivateGuard],
  canActivate:[AuthGuard]},
  {path:'edit/:usn',component:EditstudentComponent,canActivate:[AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
