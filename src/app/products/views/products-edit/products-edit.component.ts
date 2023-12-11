import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/core/interfaces/produtc.interface';
import { ProductStoreService } from 'src/app/core/stores/product.service';
import { ProductsFormService } from '../../components/product-form/products-form.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss'],
})
export class ProductsEditComponent implements OnInit {
  product!: IProduct;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productStoreService: ProductStoreService,
    private _productsFormService: ProductsFormService,
    private _productsService: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._productStoreService.product$.subscribe((productStore: IProduct) => {
      this.product = productStore;
      if (productStore) {
        const productFormValue = {
          ...productStore,
          dateRelease: productStore.date_release.substring(0, 10),
          dateRevision: productStore.date_revision.substring(0, 10),
        };
        this.form.patchValue(productFormValue);
        this.form.updateValueAndValidity();
        this.idControl.disable();
      }
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      const productBody: IProduct = {
        ...this.form.value,
        date_release: this.form.value.dateRelease,
        date_revision: this.form.value.dateRevision,
      };

      this._productsService
        .updateProduct(this.product.id, productBody)
        .subscribe({
          next: (products: IProduct) => {
            if (products) {
              this._router.navigate(['/']);
            }
          },
          error: (error) => {
            console.log('error', error);
          },
        });
    }
  }

  get form(): FormGroup {
    return this._productsFormService.productForm$;
  }
  get idControl(): AbstractControl {
    return this._productsFormService.id;
  }

  ngOnDestroy(): void {
    this.form.reset();
    this.idControl.enable();
  }
}
