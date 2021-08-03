import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  exports: [ButtonComponent, DropdownComponent]
})
export class SharedModule { }
