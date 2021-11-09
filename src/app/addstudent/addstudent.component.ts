import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  @Input() total: any;
  students:any=[];
  showsuccess:boolean=false;
  semesters:any=["1st","2nd"];
  // studentform:FormGroup;
  constructor(public fb:FormBuilder, private service:StudentService,private router:Router) {
   }
  //  Validators.pattern("^[a-zA-Z]+$")
   studentform = this.fb.group({
    usn:["", Validators.required],
    name:["", Validators.required],
    semester:[""]
  });
  ngOnInit(): void {

  }

  onSubmit() {

this.service.addstudentdata(this.studentform.value).subscribe((result)=>{

  console.log(this.studentform.controls.usn.value);
  this.router.navigate(['students']);


 this.showsuccess=true;
  this.studentform.reset();

});
}
// getallcontrols()
// {
//   console.log(this.studentform.controls);
//   // return this.studentform.controls;
// }
getusn()
{
return this.studentform.get("usn");
}

getname()
{
return this.studentform.get("name");
}
removemsg()
{
  this.showsuccess=false;
}

logoutfrom() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}
}
