import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Observable, of, throwError } from 'rxjs';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router,private ser:StudentService,private http:HttpClient) {}
  loginurl="http://localhost:26802/api/Logindatas";
  getrecord(email:any):Observable<any>
  {
    console.log("o.ooo1");
    return this.http.get<any>(`${this.loginurl}/${email}`);

  }

  getmail(): string | null {
    return localStorage.getItem('mailid');
  }


val:boolean;
  isLoggedIn() {


    this.val= localStorage.getItem('token') ==null;
    console.log(this.val);
    return this.val;
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('mailid');
    this.router.navigate(['login']);
  }

admindata:any=[];
mail:any;
pswd:any;
xval:any;
yval:any;
xj:any;









value:boolean;
isadmin()
{


  this.value= this.getmail() !="admin@gmail.com";
  console.log("mailidget"+this.value);
  return this.value;

}
}

