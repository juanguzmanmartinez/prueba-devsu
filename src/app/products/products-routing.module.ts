import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { ProductsAddComponent } from './views/products-add/products-add.component';
import { ProductsEditComponent } from './views/products-edit/products-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: ProductsAddComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: ProductsEditComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
