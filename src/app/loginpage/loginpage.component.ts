import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../auth-service.service';
import { AuthGuard } from '../auth.guard';
import { Observable, of, throwError } from 'rxjs';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  mail:any;
  pswd:any;
  _mailid:any;
  _password:any;
  constructor(private auth: AuthServiceService,private ser:StudentService, private router: Router) {}

  ngOnInit(): void {}
  logoutfrom()
  {
    this.auth.logout();
    console.log(this.auth.logout);
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  setmail(mailid: string): void {
    localStorage.setItem('mailid', mailid);
    console.log("whatnbfbdmf"+localStorage.setItem('mailid', mailid));
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getmail(): string | null {
    return localStorage.getItem('mailid');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
     this. _mailid=this.loginForm.value.email;
     this._password=this.loginForm.value.password;

      console.log("ent1-"+this._mailid);

      this.ser.getrecord(this._mailid).subscribe(data => {
        console.log("ent2");
        console.log(data);
        console.log("the data is"+data);
        this.mail=data.email;
        this.pswd=data.password;
        console.log("done");
        console.log("entry3");
        console.log(this.mail);
        console.log(this.pswd);

        if (this._mailid ==this.mail && this._password ==this.pswd) {
          console.log("entry4");
          // if (email =='a' && password =='12') {
            this.setToken('abcdefghijklmnopqrstuvwxyz');
            this.setmail(this._mailid);
            console.log("mailidset"+this._mailid);

            this.router.navigate(['/students']);

          }
          else{
            alert("invalid username or password");
          }
        },

          (err: Error) => {

              alert("Failed to Login");
            }

        );


        }
    }


   }

