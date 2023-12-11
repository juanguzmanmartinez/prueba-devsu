import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProductsFormService {
  private readonly productForm: FormGroup;

  private _iDControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
  ]);
  private _nameControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private _descriptionControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private _logoControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private _dateReleaseControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private _daterevisionControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  get productForm$(): FormGroup {
    return this.productForm;
  }

  get id(): AbstractControl {
    return this.productForm$.get('id') as FormControl;
  }

  get name(): AbstractControl {
    return this.productForm$.get('name') as FormControl;
  }
  get description(): AbstractControl {
    return this.productForm$.get('description') as FormControl;
  }
  get logo(): AbstractControl {
    return this.productForm$.get('logo') as FormControl;
  }
  get dateRelease(): AbstractControl {
    return this.productForm$.get('dateRelease') as FormControl;
  }
  get dateRevision(): AbstractControl {
    return this.productForm$.get('dateRevision') as FormControl;
  }

  constructor(private _formBuilder: FormBuilder) {
    this.productForm = this._formBuilder.group({
      id: this._iDControl,
      name: this._nameControl,
      description: this._descriptionControl,
      logo: this._logoControl,
      dateRelease: this._dateReleaseControl,
      dateRevision: this._daterevisionControl,
    });
  }

  resetForm(): void {
    this.id.setValue('');
    this.name.setValue('');
    this.description.setValue('');
    this.logo.setValue('');
    this.dateRelease.setValue('');
    this.dateRevision.setValue('');
  }
  disableIdControl() {
    this.id.disable();
  }
  ngOnDestroy(): void {
    this.resetForm();
  }
}
