import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student.module';
import { AdminModule } from './admin.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound.component';

import { AddStudentCanDeactivateGuard } from './addstudent_candeactivate_guard.service';
import { EditstudentCanActivate } from './editstudent_canactivateguard.service';
import { ResolveguardService } from './resolveguard.service';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    RegisteruserComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule,
    StudentModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule



  ],

  providers: [AddStudentCanDeactivateGuard,EditstudentCanActivate,ResolveguardService,AdminGuard],
  bootstrap: [AppComponent],


})
export class AppModule { }
