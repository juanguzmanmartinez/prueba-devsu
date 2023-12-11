import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsFormService } from './products-form.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/core/interfaces/produtc.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() submit = new EventEmitter();

  constructor(
    // private _productsService: ProductsService,
    private _productsFormService: ProductsFormService // private _router: Router
  ) {}

  ngOnInit(): void {}
  submitForm(): void {
    if (this.form.valid) {
      const productBody: IProduct = {
        ...this.form.value,
        date_release: this.form.value.dateRelease,
        date_revision: this.form.value.dateRevision,
      };
      this.submit.emit(productBody);
    }
  }
  resetForm(): void {
    this._productsFormService.resetForm();
  }
  errorMessages(errors: any): string {
    if (!errors) return '';
    return errors.maxlength || errors.minlength
      ? 'ID no válido!'
      : 'Este campo es requerido!';
  }
  get form(): FormGroup {
    return this._productsFormService.productForm$;
  }
  get idControl(): AbstractControl {
    return this._productsFormService.id;
  }
  get nameControl(): AbstractControl {
    return this._productsFormService.name;
  }
  get descriptionControl(): AbstractControl {
    return this._productsFormService.description;
  }
  get logoControl(): AbstractControl {
    return this._productsFormService.logo;
  }
  get dateReleaseControl(): AbstractControl {
    return this._productsFormService.dateRelease;
  }
  get dateRevisionControl(): AbstractControl {
    return this._productsFormService.dateRevision;
  }
  get statusForm(): boolean {
    return this.form.invalid;
  }
  ngOnDestroy(): void {
    this.form.reset();
  }
}
