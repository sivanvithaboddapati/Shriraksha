import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';


const routes: Routes = [



// {path:'students', loadChildren:'./student.module#StudentModule'},
{path:'login',component:LoginpageComponent},
{path:'register',component:RegisteruserComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
