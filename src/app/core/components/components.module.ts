import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { LabelComponent } from './label/label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
const COMPONETNS = [
  ButtonComponent,
  InputComponent,
  TableComponent,
  LabelComponent,
  DropdownComponent,
  SkeletonComponent,
];
@NgModule({
  exports: [...COMPONETNS],
  declarations: [...COMPONETNS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
