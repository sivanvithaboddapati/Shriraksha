import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
import { DetailsComponent } from './details/details.component';
import { StudentService } from './student.service';
@Injectable({
  providedIn: 'root'
})
export class ResolveguardService implements Resolve<any> {
  constructor( private _student:StudentService)
    {
    }
  resolve(){
  return this._student.getStudents();
  }
}

