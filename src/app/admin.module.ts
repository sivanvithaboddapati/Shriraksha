import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],

})
export class AdminModule { }

