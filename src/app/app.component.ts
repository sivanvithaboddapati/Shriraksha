import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  adminpanel:boolean=false;
  title = 'StudentApp';
  heading="Student Details";
  imagepath="assets/studentimage.png";

x= localStorage.getItem('mailid');

ngOnInit()
{

    console.log(this.x);
    if(this.x=="admin@gmail.com")
    {
       this.adminpanel=true;
    }
  }
}



