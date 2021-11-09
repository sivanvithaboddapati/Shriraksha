import { CanDeactivate } from "@angular/router";
import { AddstudentComponent } from "./addstudent/addstudent.component";
import { Injectable } from "@angular/core";


@Injectable()
export class AddStudentCanDeactivateGuard implements CanDeactivate<AddstudentComponent>
{
  dialogService: any;
  canDeactivate(component: AddstudentComponent):boolean {
    if(component.studentform.dirty)
    {
      console.log(component.studentform.dirty)
       return confirm("Are you sure to discard your changes");
    }
    return true;


}
}
