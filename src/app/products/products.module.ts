import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { ProductsAddComponent } from './views/products-add/products-add.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../core/components/components.module';
import { ProductsComponent } from './products.component';
import { ModalDeleteProductsComponent } from './components/modal-delete-products/modal-delete-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsEditComponent } from './views/products-edit/products-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsAddComponent,
    ProductsComponent,
    ModalDeleteProductsComponent,
    ProductsEditComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
