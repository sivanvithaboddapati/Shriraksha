import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  showsuccess:boolean=false;
  semesters:any=["1st","2nd"];
  // studentform:FormGroup;
  value:any;
  constructor(public fb:FormBuilder, private _route:Router, private service:StudentService,private router:ActivatedRoute) {
   }
   editstudent = this.fb.group({
    usn:[""],
    name:[" "],
    semester:[""]
  });

  ngOnInit(): void {
    this.value=this.router.snapshot.params.usn;
//console.log(this.router.snapshot.params.usn);
this.service.getStudentByUsn(this.router.snapshot.params.usn).subscribe((result:any)=>{
  console.log(result);
  this.editstudent = this.fb.group({
    usn:[result["usn"]],
    name:[result["name"]],
    semester:[result["semester"]]
  });
});
  }
  onUpdate() {


this.service.updatestudentdata(this.router.snapshot.params.usn,this.editstudent.value).
subscribe((result)=>{
this._route.navigate(['students']);

  this.showsuccess=true;

});

}
removemsg()
{
  this.showsuccess=false;
}

deletestudent(student_usn: any)
{
  console.log(student_usn);
  if(confirm("Do you want to delete?")){

    this.service.deletestudendata(student_usn).subscribe((result)=>{
      // console.log(result);
      this._route.navigate(['students']);


    });
  }

}
}
