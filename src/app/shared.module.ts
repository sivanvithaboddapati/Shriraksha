import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[ CommonModule, Ng2SearchPipeModule,
    Ng2OrderModule,
    FontAwesomeModule, ReactiveFormsModule,
    FormsModule
]
})
export class SharedModule { }

