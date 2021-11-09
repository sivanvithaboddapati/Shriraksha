import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  showsuccess:boolean=false;
  email:any;
  password:any;
  constructor(public fb:FormBuilder, private service:StudentService,private router:Router) { }


  ngOnInit(): void {
  }
  onSubmit(userform) {
    console.log(userform.value);
    this.service.addlogindata(userform.value).subscribe((result)=>{
      // console.log('success!',result);
      // console.log(userform.controls.usn.value);
      this.router.navigate(['login']);
  });

  }
}
