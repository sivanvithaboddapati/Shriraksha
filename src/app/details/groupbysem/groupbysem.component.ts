import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-groupbysem',
  templateUrl: './groupbysem.component.html',
  styleUrls: ['./groupbysem.component.css']
})
export class GroupbysemComponent implements OnInit {
@Input() total:any;
@Input() sem1:any;
@Input() sem2:any;
selectedgroup:string="all";
@Output() selectchanged:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  selectedchangedfunc()
  {
  this.selectchanged.emit(this.selectedgroup);
  console.log(this.selectedgroup);
  }

}
