import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './services/client/client.service';
import { ProductsService } from './services/products/products.service';
import { ProductStoreService } from './stores/product.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ClientService, ProductsService, ProductStoreService],
})
export class CoreModule {}
