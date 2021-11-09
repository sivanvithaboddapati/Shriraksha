import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details/details.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { GroupbysemComponent } from './details/groupbysem/groupbysem.component';

import { StudentRoutingModule } from './studentrouting.module';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
DetailsComponent,
AddstudentComponent,
EditstudentComponent,
GroupbysemComponent,


  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    // RouterModule
  ],
// exports:[RouterModule]

})
export class StudentModule {

  constructor()
  {
    console.log("StudentModule loads");
  }
}
