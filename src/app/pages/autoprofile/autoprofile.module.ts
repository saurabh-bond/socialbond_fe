import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { AddProfileComponent } from './add-profile/add-profile.component';

@NgModule({
  declarations: [AddProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InlineSVGModule,
    RouterModule.forChild([
      { path: 'add-profile', component: AddProfileComponent }
    ])
  ]
})
export class AutoProfileModule {}
