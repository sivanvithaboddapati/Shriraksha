import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  ApiUrl="http://localhost:26802/api/Students";
  loginurl="http://localhost:26802/api/Logindatas";


  constructor(private http:HttpClient) { }

  getStudents()
  {

      return this.http.get<any>(this.ApiUrl);

  }

  getadmin()
  {
    return this.http.get<any>(this.loginurl);
  }
  getrecord(email:any)
  {

    return this.http.get<any>(`${this.loginurl}/${email}`);

  }
addlogindata(data:any)
{
  console.log(data);
  return this.http.post<any>(this.loginurl,data);
}
  addstudentdata(data:any)
  {
    console.log(data);
    return this.http.post<any>(this.ApiUrl,data);
  }

  deletestudendata(student_usn:any)
  {
    //console.log(student_usn);
    return this.http.delete<any>(`${this.ApiUrl}/${student_usn}`);
  }

getStudentByUsn(usn:any)
{
  return this.http.get(`${this.ApiUrl}/${usn}`);
}

updatestudentdata(usn:any,data:any)
{
  console.log(usn,data);

  return this.http.put(`${this.ApiUrl}/${usn}`,data);

}
}
