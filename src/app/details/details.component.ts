import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // counts:number;
  show:boolean=false;
  searchtext:any;
  disabled:boolean=false;

  isvisible:boolean=false;

  selectedgroup:string="all";

  students:any=[];
    constructor(private service:StudentService,private auth:AuthServiceService,
      private _router:ActivatedRoute )
      {
      this.students=this._router.snapshot.data['studentlist'];

      }


    ngOnInit(): void {
    // this.refresh();
    }
    refresh()
    {
      this.service.getStudents().subscribe(data=>{

        this.students=data;
      });
    }


  gettotal()
  {
    return this.students.length;
  }

  getsem1count()
  {
  return this.students.filter(x=>x.semester==="1st").length;
  }

  getsem2count()
  {
  return this.students.filter(e=>e.semester==="2nd").length;
  }

  onoptionchange(selectedopt:any):void
  {
  this.selectedgroup=selectedopt;
  }
  addform()
  {
    this.isvisible=true;
  }
  deletestudent(student_usn: any)
  {
    console.log(student_usn);
    if(confirm("Do you want to delete?")){

      this.service.deletestudendata(student_usn).subscribe((result)=>{
        // console.log(result);
        this.refresh();


      });
    }

  }


  isdesc:boolean=true;

sortData(property)
{
  //console.log(typeof(property));
  this.isdesc=!this.isdesc;
  let direction=this.isdesc? 1: -1;

  this.students.sort(
    function(a,b){
    if(a[property]>b[property]){
      return 1*direction;  //asc
    }
    else if(a[property]<b[property])
    {
      return -1*direction;   //desc
    }
    else{
      return 0; //for equal
    }
  }
  );
}


logoutfrom()
{

  this.auth.logout();
  console.log(this.auth.logout);
}

  }


