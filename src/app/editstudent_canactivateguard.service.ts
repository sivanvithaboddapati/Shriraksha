import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StudentService } from "./student.service";

@Injectable()
export class EditstudentCanActivate implements CanActivate{

  constructor(private _service:StudentService, private _router:Router)
  {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    // // this._service.getStudentByUsn(route.paramMap.get('usn')).subscribe((result:any)=>{
    // //   console.log(result);
    // });
  const studentexist=!!this._service.getStudentByUsn(route.paramMap.get('usn'));
  console.log("error detected");
    console.log(route.params.usn);
  console.log(studentexist);
  if(studentexist)
  {
    return true;
  }
  else{
    this._router.navigate(['./pagenotfound']);
    return false;
  }
  }

}
