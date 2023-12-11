import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductsFormService } from './products-form.service';
import { IProduct } from 'src/app/core/interfaces/produtc.interface';

const productBody: IProduct = {
  id: 'tr3',
  name: 'tarjeta3',
  description: 'tarjeta3',
  logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
  date_release: '2023-12-12T00:00:00.000+00:00',
  date_revision: '2023-12-14T00:00:00.000+00:00',
};
const bodyReset = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};
describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let productsFormService: ProductsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [ProductsFormService],
    });

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    productsFormService = TestBed.inject(ProductsFormService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit submit event on form submission', () => {
    jest.spyOn(component.submit, 'emit');

    component.form.setValue(productBody);
    component.form.updateValueAndValidity();
    component.submitForm();

    expect(component.form.valid).toBeTruthy();
    expect(component.submit.emit).toHaveBeenCalledWith(productBody);
  });
});
