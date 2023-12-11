import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ProductsAddFormService } from './products-add-form/products-add-form.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/core/interfaces/produtc.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss'],
})
export class ProductsAddComponent implements OnInit, OnDestroy {
  errorId = false;
  constructor(
    private _productsService: ProductsService,
    private _productsAddFormService: ProductsAddFormService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  submitForm(productBody: any): void {
    if (productBody) {
      this._productsService
        .validateProductId(productBody.id)
        .subscribe((response: boolean) => {
          if (response) {
            this.idControl.setErrors({ maxlength: 'true' });
            return;
          }
          this._productsService.addProducts(productBody).subscribe({
            next: (products: IProduct) => {
              if (products) {
                this._router.navigate(['/']);
              }
            },
            error: (error) => {
              console.log('error', error);
            },
          });
        });
    }
  }
  resetForm(): void {
    this._productsAddFormService.resetForm();
  }
  errorMessages(errors: any): string {
    if (!errors) return '';
    return errors.maxlength || errors.minlength
      ? 'ID no válido!'
      : 'Este campo es requerido!';
  }
  get form(): FormGroup {
    return this._productsAddFormService.productForm$;
  }
  get idControl(): AbstractControl {
    return this._productsAddFormService.id;
  }

  ngOnDestroy(): void {
    this.form.reset();
  }
}
